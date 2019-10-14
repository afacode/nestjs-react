<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Install
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License

  Nest is [MIT licensed](LICENSE).

## Learn
> 客户端请求 ---> 中间件 middleware ---> 守卫 guard ---> 拦截器之前 Interceptors ---> 管道 pipes ---> 控制器处理并响应 ---> 拦截器之后 ---> 过滤器

- 接收客户端发起请求
- 中间件去做请求处理，比如helmet，csrf，rate limiting，compression等等常用的处理请求的中间件。
- 守卫就验证该用户的身份，如果没有权限或者没有登录，就直接抛出异常，最适合做权限管理。
- 拦截器根据作者解释，拦截器之前不能修改请求信息。只能获取请求信息。拦截器是在响应之前，响应之后执行。它常用功能就是打印响应日志，缓存数据，转化响应数据，响应超时判断。
- 管道做请求的 数据验证和转化 ，如果验证失败抛出异常。
- 这里处理响应请求的业务，俗称controller，处理请求和服务桥梁，直接响应服务处理结果。
- 拦截器之后只能修改响应body数据。
- 最后走过滤器：如果前面任何位置发生抛出异常操作，都会直接走它

> 核心模块
- @nestjs/common 提供很多装饰器，log服务等
- @nestjs/core 核心模块处理底层框架兼容
- @nestjs/microservices 微服务支持
- @nestjs/testing 测试套件
- @nestjs/websockets websocket支持

## 目录
- main.ts	入口
- app.service.ts	APP服务（选择）
- app.module.ts	APP模块（根模块，必须）
- app.controller.ts	APP控制器（选择）
- config	配置模块
- core	核心模块（申明过滤器、管道、拦截器、守卫、中间件、全局模块）
- feature	特性模块（主要业务模块）
- shared	共享模块（共享mongodb、redis封装服务、通用服务）
- tools	工具（提供一些小工具函数）

