
# angularjs  (1.x)
## 优点：
    模版功能：声明式，双向绑定
    MVC框架
    java的一些概念 -> 依赖注入
## 缺点：
    性能 -> 双向绑定 脏检查
    路由
    作用域
    表单验证
    js语言本身特性
    学习成本

# angular  (2.x -> 4.x) 解决优化 1.x 的缺点／问题
## 新特性
    AngularCLI -> 命令行工具，一键生成
    服务器端渲染
    移动和桌面兼容 -> UI组件库

# 安装使用笔记
## (在此之前请全局更新版本 sudo npm update -g ，避免出现异常问题; 如果在webstorm修改文件代码报错：clear Read-Only State， 请输入命令解锁：sudo chown -R 你电脑的用户名 当前目录)
    1. node： 6.10.1 | 7.x  (或自行使用3M安装法，切换node版本，CNode技术社区有帖子详细介绍)
    2. angularCLI：sudo npm install -g @angular/cli  (下载时间过长，请在好的wifi环境下)
    3. 查看版本信息：ng -v     (可以修改angular项目中使用的npm源，减少npm包下载时间：ng set --global packageManager=cnpm)
    4. 创建项目：ng new name （name为项目名称，下载时间过长，请在好的wifi环境下）
    5. 启动项目：ng server  (http://localhost:4200，修改代码后实时热更新)
    6. 引入第三方库：npm i jquery bootstrap --save  (并在angular-cli.json配置中"scripts"／"styles"引入)
    7. 安装类型描述文件：npm i @types/jquery @types/bootstrap --save-dev
    8. 生成组件文件：ng g component name (name表示你要生成的组件名称，会自动引入更新到app.module.ts文件中)
    9. 生成服务文件：ng g service name
    10.生成管道文件：ng g pipe name

# 注意
## 旧项目angular从2.x升级到4.x后，需要卸载掉angular-cli，重新安装@angular/cli@latest，新angular4.x项目不需要此操作
    1. npm uninstall --save-dev angular-cli
    2. npm install --save-dev @angular/cli@latest
    3. angular-cli.json配置修改：
           "version": "1.0.0"
           "environmentSource":"environments/environment.ts",
           "environments": {
             "dev": "environments/environment.ts",
             "prod": "environments/environment.prod.ts"
           }
## chrome调试工具：AngularJS Batarang
# angular报错解决
    1. Property 'x' does not exist on type 'y'.
    报错解决：y.x  =>  (y as any).x
    2. The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.
    报错解决：x => (x as any)
