export const getDataApi = (url, setData) => {
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(res.status)
      }
    })
    .then((res) => {
      setData(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
