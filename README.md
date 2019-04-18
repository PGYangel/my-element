<p align="center">
  <img src="https://cdn.rawgit.com/ElemeFE/element/dev/element_logo.svg">
</p>

# 配置步奏：

## 1、配置git环境变量：

如果git是默认安装，那么默认路径为：C:\Program Files\Git\bin

复制上面路径

计算机右键->属性->系统保护->高级

在系统变量中找到Path变量，选中进行“编辑”

在变量值后面加上;C:\Program Files\Git\bin。注意，不能少了';'分号分隔前面的变量值

git环境变量配置完成

## 2、配置项目的element-ui为git.q1op.com的element项目

打开根目录下package.json文件

在dependencies下面的element-ui值改为git+https://github.com/PGYangel/my-element.git

然后重新npm i重新下载依赖包即可

## 命令集
安装yarn：npm install -g yarn

dev运行命令：npm run dev

发布命令：npm run dist



## 目录结构：

examples 官网demo

packages 组件

lib 打包发布

## 二次开发步骤：

1、对于页面内容的修改，去到packages\组件src\main.vue 做相应的修改

2、对于样式的修改，去到packages\theme-chalk\src\组件名.scss 做相应的修改

3、查看自己修改后的效果：http://127.0.0.1:8085/#/zh-CN/

去到examples\docs\zh-CN\组件名.md，按照自己的定义，修改一下，就可以在页面的相应的组件的例子中看到自己修改后的效果

4、生成lib文件夹，方面后面使用自己的代码

## 新增组件：
1、在packages目录下建立新增组件文件夹，如：testInput

2、testInput文件夹src放资源，vue文件需要跟组见名相同

3、index.js文件夹内容要符合组件名

4、根目录下components.json文件添加新组件引用
