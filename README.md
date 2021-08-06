# 博客系统后端

- 基于[egg][egg]

## 项目简介

博客系统后端
- 本项目用于前端工程师全栈之路学习后端,用于返回博客系统前端请求数据
- 需要搭配 [blog-fe: 基于Ant Design Pro 的博客系统前端][fe] 使用
- 如果单纯想要搭建博客,最佳实践可参考 [良菌的技术后花园][blog]
- 另外本项目可与另一个实现同样功能基于 [Koa的博客系统后端][be-koa] 进行比较使用

### 项目实现功能

- [x] 基础框架
- [x] md转html

### 快速开始

查看 [egg官方文档][egg]

### 开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
[fe]: https://github.com/LiangJunChan/blog-fe
[be-koa]: https://github.com/LiangJunChan/blog-be
[blog]: https://github.com/LiangJunChan/liangjunchan.github.io