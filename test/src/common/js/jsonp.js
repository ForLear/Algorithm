// 封装JSONP
import originJSONP from 'jsonp'

export default function jsonp (url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&')
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

function param () {
    let url = ''
    for (k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += `&${k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
}