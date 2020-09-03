import apiUrl from '../apiConfig'
import axios from 'axios'

export const pv = data => {
  return axios({
    method: 'post',
    url: apiUrl + '/pv/',
    data: data
  })
}
