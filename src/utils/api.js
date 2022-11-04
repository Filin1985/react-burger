import { API_URL } from './config.js'

const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : res.json().then((err) => Promise.reject(res.status))
}

export const getDataApi = (setData) => {
  fetch(`${API_URL}/ingredients`)
    .then((res) => {
      return checkResponse(res)
    })
    .then((res) => {
      setData(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
