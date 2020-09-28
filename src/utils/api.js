// 用于管理所有的接口信息
import http from './http'

// 逐个导出接口

// 首页滑块内容的接口
export function getTopRated(params) {
  // 返回 执行http.get(), 执行后返回一个 promise
  return http.get('/home/topRatedMovies', params)
}

// 首页的列表接口
export function getIndexList(params) {
  return http.post('/home/movieOnInfoList', params)
}


//上啦页面 数据
export function pullUpLoadList(params) {
  return http.post('/home/moreComingList', params)
}

//获取影片详情页的数据接口
export function getMovieInfo(params) {
  return http.get('/detail/info', params)
}

//获取影院的接口
export function getCinema(params){
  return http.get('/cinema/list', params)
}

//城市列表接口
export function getCitiesList(params){
  return http.get('/cities/list', params)
}