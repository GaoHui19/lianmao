import http from '../utils/http'

export const getHomeData=(params)=> http({url:'/home',data:params})
