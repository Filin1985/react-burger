export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then(() => Promise.reject(res.status))
}
