import http from '../utils/http'

export const getPageData = (url, params) => {
  return http({ url, data: params });
}
