[简体中文](README.md) | [English](README.en.md)

# panda Admin Platform (Front-end)

> The front-end of the panda admin platform, rebuilt on [D2Admin](https://github.com/d2-projects/d2-admin-start-kit) 1.7.2 (Element UI), working with the [pandaAdmin](https://github.com/hequan2017/pandaAdmin) back-end.

## Introduction

panda is the companion front-end of [pandaAdmin](https://github.com/hequan2017/pandaAdmin), a Django + DRF back-end: it implements login via the D2Admin framework (calling the back-end `/token` endpoint) and demonstrates full CRUD interaction with the back-end `/system/test` endpoints through a d2-crud table page — a handy reference for getting started with separated front-end/back-end development.

## ✨ Features

- Login: `AccountLogin` obtains a token from the back-end `/token` endpoint, `AccountLoginInfo` fetches user info
- Demo page: a d2-crud data table page (`/asset`) that calls the back-end `/system/test` endpoints for list / query / create / update / delete
- Full D2Admin framework capabilities: multi-tab pages, sidebar menus, menu search, theme switching, i18n (Simplified Chinese / English), etc.
- Supports both mock data and No-Mock builds (`npm run build:nomock`)

## 🛠 Tech Stack

- Vue 2.6 + Vue Router + Vuex, built with vue-cli 3
- UI: Element UI 2.12 (D2Admin 1.7.2 template)
- axios 0.18, @d2-projects/d2-crud 2.1, mockjs

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Develop locally
npm run dev

# Production build
npm run build
```

- The base API address is configured via `VUE_APP_API` in `.env` (default `/api/`); the page title prefix is `VUE_APP_TITLE` (panda管理平台)
- Deploy the [pandaAdmin](https://github.com/hequan2017/pandaAdmin) back-end first

## 🔗 Related Projects

- Back-end: [pandaAdmin](https://github.com/hequan2017/pandaAdmin)
- D2Admin template docs: <https://fairyever.com/d2-admin/doc/zh/learn-guide/#功能>

## 📄 License

[MIT](LICENSE)

## Author

- He Quan (何全)
