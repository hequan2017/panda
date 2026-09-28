[简体中文](README.md) | [English](README.en.md)

# panda 熊猫管理平台 前端

> panda（熊猫）管理平台的前端项目，基于 [D2Admin](https://github.com/d2-projects/d2-admin-start-kit) 1.7.2（Element UI）二次开发，后端为 [pandaAdmin](https://github.com/hequan2017/pandaAdmin)。

## 项目介绍

panda 是 Django + DRF 后端 [pandaAdmin](https://github.com/hequan2017/pandaAdmin) 的配套前端：通过 D2Admin 框架实现登录认证（对接后端 `/token` 接口），并用 d2-crud 表格组件演示了与后端 `/system/test` 接口的完整增删改查交互，可作为"前后端分离入门"的前端参考。

## ✨ 功能特性

- 登录认证：`AccountLogin` 对接后端 `/token` 获取 Token，`AccountLoginInfo` 获取用户信息
- 演示页面：基于 d2-crud 的数据表格页（`/asset`），调用后端 `/system/test` 接口完成列表、查询、新增、修改、删除
- D2Admin 完整框架能力：多标签页、侧边栏菜单、菜单搜索、主题切换、国际化（简体中文/英文）等
- 支持 Mock 数据与 No Mock 构建（`npm run build:nomock`）

## 🛠 技术栈

- Vue 2.6 + Vue Router + Vuex，vue-cli 3 构建
- UI：Element UI 2.12（D2Admin 1.7.2 模板）
- axios 0.18、@d2-projects/d2-crud 2.1、mockjs

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 生产构建
npm run build
```

- 网络请求公共地址通过 `.env` 中的 `VUE_APP_API` 配置（默认 `/api/`），页面标题前缀为 `VUE_APP_TITLE`（panda管理平台）
- 使用前需先部署好后端 [pandaAdmin](https://github.com/hequan2017/pandaAdmin)

## 🔗 相关项目

- 后端：[pandaAdmin](https://github.com/hequan2017/pandaAdmin)
- 模板（D2Admin）文档：<https://fairyever.com/d2-admin/doc/zh/learn-guide/#功能>

## 📄 许可证

[MIT](LICENSE)

## 作者

- 何全
