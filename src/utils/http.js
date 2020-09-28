const prefix = 'http://www.pudge.wang:3002/api'

const http = {
  // url: 请求的路径
  // params: 对象，用于存放请求体
  get: function (url, params) {
    let result = '?'
    // 如果params存在 并且是对象才执行
    if (typeof params === 'object' && params != null) {
      for (let key in params) {
        result += `${key}=${params[key]}&`
      }
      // 去掉最后一个 ‘&'
      url += result.slice(0, -1)
    }
    // 拼接接口地址和请求的url
    return fetch(prefix + url)
      .then(res => res.json())
  },

  post: function (url, params) {
    // 实例化一个FormData对象
    let formData = new FormData()
    // FormData.append(a, 3) 
    for (let key in params) {
      formData.append(key, params[key])
    }
    return fetch(prefix + url, {
      method: 'POST',
      body: formData
    }).then(response => response.json())
  }

}


export default http