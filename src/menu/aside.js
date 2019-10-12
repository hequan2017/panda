// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '资产',
    icon: 'folder-o',
    children: [{ path: '/asset', title: '资产管理' }]
  }
]
