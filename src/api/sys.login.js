import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/token',
    method: 'post',
    data
  })
}
export const AccountLoginInfo = token => {
  return request({
    url: '/system/user_info',
    data: {
      token
    },
    method: 'post'
  })
}

export const TestGetList = parameter => {
  return request({
    url: `/system/test?${parameter}`,
    method: 'get'
  })
}

export const TestCreate = data => {
  return request({
    url: '/system/test',
    data: data,
    method: 'post'
  })
}

export const TestGetInfo = id => {
  return request({
    url: `/system/test/${id}`,
    method: 'get'
  })
}

export const TestUpdate = (id, data) => {
  return request({
    url: `/system/test/${id}`,
    data: data,
    method: 'PUT'
  })
}

export const TestDelete = id => {
  return request({
    url: `/system/test/${id}`,
    method: 'delete'
  })
}
