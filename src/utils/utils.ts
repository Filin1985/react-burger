import { API_URL } from './config'
import { store } from '../services/store'

export interface RefreshTokensResponse {
  accessSchema: string
  accessToken: string
  refreshToken: string
}

export type RootState = ReturnType<typeof store.getState>

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then(() => Promise.reject(res.status))
}

export const request = <T>(url: string, options: RequestInit): Promise<T> => {
  return fetch(url, options).then((res) => checkResponse<T>(res))
}

export function setCookie(
  name: string,
  value: string | number,
  options: any = {}
) {
  options = {
    path: '/',
    ...options,
  }

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString()
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey
    let optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }

  document.cookie = updatedCookie
}

export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export function deleteCookie(name: string) {
  setCookie(name, '', { expires: -1 })
}

export const refreshToken = (): Promise<any> => {
  return fetch(`${API_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  }).then(checkResponse)
}

export const fetchWithRefresh = async <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  try {
    const res = await fetch(url, options)
    return await checkResponse<T>(res)
  } catch (err: any) {
    if (err?.message === 'jwt expired') {
      const refreshData = await refreshToken()
      if (!refreshData.success) {
        Promise.reject(refreshData)
      }
      localStorage.setItem('refreshToken', refreshData.refreshToken)
      setCookie('accessToken', refreshData.accessToken)
      if (!options.headers) {
        options.headers = new Headers()
      }
      ;(options.headers as Headers).append(
        'Authorization',
        refreshData.accessToken
      )
      const res = await fetch(url, options)
      return await checkResponse<T>(res)
    } else {
      return Promise.reject(err)
    }
  }
}
