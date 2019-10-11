import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/api/token',
    method: 'post',
    data
  })
}
export const AccountLoginInfo = token => {
  return request({
    url: '/system/api/user_info',
    data: {
      token
    },
    method: 'post'
  })
}
