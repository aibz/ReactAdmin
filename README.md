## 设置淘宝镜像
* npm config set registry https://registry.npm.taobao.org
* yarn config set registry https://registry.npm.taobao.org
## 初始化项目:
* yarn init -y
* npm init -y
## 下载项目的所有声明的依赖:
* yarn
* npm install
## 下载指定的运行时依赖包:
* yarn add webpack@3.2.1
* npm install webpack@3.2.1 -S
## 下载指定的开发时依赖:
* yarn add webpack@3.2.1 -D
* npm install webpack@3.2.1 -D
## 全局下载指定包:
* yarn global add webpack
* npm install webpack -g
## 删除依赖包:
* yarn remove webpack
* npm remove webpack -S
* yarn global remove webpack
* npm remove webpack -g
## 运行项目中配置的 script:
* yarn run xxx
* npm run xxx
## 查看某个包的信息:
* yarn info xxx
* npm info xxx
## Git命令
* git config --global user.name "username" //配置用户名
* git config --global user.email "xx@gmail.com" //配置邮箱
* git init //初始化生成一个本地仓库
* git add . //添加到暂存区
* git commit –m "message" //提交到本地仓库
* git remote add origin url //关联到远程仓库
* git push origin master //推送本地 master 分支到远程 master 分支
* git checkout -b dev //创建一个开发分支并切换到新分支
* git push ogigin dev //推送本地 dev 分支到远程 dev 分支
* git pull origin dev //从远程 dev 分支拉取到本地 dev 分支
* git clone url //将远程仓库克隆下载到本地
* git checkout -b dev origin/dev // 克隆仓库后切换到 dev 分支
## 项目启动命令
* npm start
## 项目打包发布命令
* npm run build
* npm install -g serve
* serve build
## 项目结构：
* --src
*     --api			ajax
*     --assets		公用资源
*     --components		非路由组件
*     --config		配置
*    --pages		路由组件
*    --utils			工具
*    App.js			应用根组件
*    index.js			程序入口
## 所需的包
* yarn add antd
* yarn add react-app-rewired customize-cra babel-plugin-import
* yarn add less less-loader
* yarn add react-router-dom
* yarn add axios
* yarn add store
* yarn add jsonp
* yarn add react-draft-wysiwyg draftjs-to-html
* yarn add redux react-redux redux-thunk redux-devtools-extension
* yarn add echarts echarts-for-react
* yarn add bizcharts @antv/data-set
* npm install -g serve（用来发布项目的命令的包）