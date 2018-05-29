import Jsonp from 'jsonp'
import { stringify } from 'querystring'

function apiRejectHandler(msg) {
  return Promise.reject(msg)
}

export function promiseJsonp(url, data) {
  const data = data
  // 避免接口缓存
  data.__time = new Date().getTime()
  return new Promise((resolve, reject) => {
      Jsonp(`${url}?${stringify(data)}`, null, (error, data) => {
        if (error) {
          apiRejectHandler(error)
          reject(error)
        } else {
          resolve(data)
        }
      })
    }).catch(_ => {
      apiRejectHandler('接口请求出错')
  })
}