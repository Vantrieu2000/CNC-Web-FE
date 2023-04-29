# Source Next.JS + React Query + AntDesign
## Packages

- NextJS 13
- Tanstack/React Query 4
- AntDesign 5
- dayjs
- TypeScript 4.9
- SASS

AntDesign 5 sử dụng dayjs thay vì momentJs nên Source sẽ dùng dayjs để đồng bộ

## Install
Yarn (Khuyên dùng)
```sh
yarn
```

NPM
```sh
npm install
```

## Run
Yarn
```sh
yarn dev
```
NPM
```sh
npm run dev
```

## ENV
Khi chạy trên local, env sẽ nhận ``.env.local``

Khi build thì cần các env sau
Staging: ``.env.staging``
Develop: ``.env.develop``
Staging: ``.env.production``


## Folder

lib
- api: ``Các api endpoint``
- omponents: ``Các component dùng trong trang``
- constant: ``Các biến constant dùng chung``
- dto: ``Type của response từ api``
- type: ``Type của các Function``
- enum: ``Các enum``
- function: ``Các function dùng chung``
- layout: ``Layout của trang``
- locale: ``Đa ngôn ngữ``
- object: ``Các object dùng trong các trường hợp cần OOP``
- validate: ``Các rule validate của antd, dùng lại nhiều lần``

styles: Style của app

pages: Các route của app