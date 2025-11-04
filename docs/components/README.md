# 介绍

### 组件安装

npm 或者 yarn 安装 `ducrong-ui`

```bash
yarn add ducrong-ui -S
```
or
```bash
npm install ducrong-ui -S
```

### 引入组件

```js
import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import DucrongUI from 'ducrong-ui';
import 'ducrong-ui/dist/ducrong-ui.css'; // 引入样式

Vue.use(ElementUI);
Vue.use(DucrongUI);
```

### 注意

本组件使用了 [vue-template-compiler@2.6.14](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler#readme) 版本来编译 `vue` 文件，请确定在其他项目使用时 `vue` 与 `vue-template-compiler` 的版本 `>= 2.6.14` 