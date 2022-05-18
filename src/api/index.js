import ajax from '@/api/ajax'
// const BASE_URL = 'http://121.4.102.12:4000';
const BASE_URL = '/api'

export const reqAddress = (geohash) =>
  ajax(`${BASE_URL}/position/${geohash}`)
export const reqFoodTypes = () =>
  ajax(BASE_URL + '/index_category')
export const reqShops = (longtitude, latitude) =>
  ajax(BASE_URL + '/shops', {longtitude, latitude})
