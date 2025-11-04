# 组件开发

1. 执行 `npm run create` 按提示输入组件名称
```bash
npm run create
```

2. 在 `packages/index.js` 添加代码

```js
+ import DuButton from './Button/index';

const components = [
  ...
  + DuButton
];


export default {
  ...
  + DuButton
};
```

3. `docs/components/base` 目录下新建 Button.md 文件

````js
# Button
::: demo

```html
<template>
  <du-button>按钮</du-button>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    },
    created() {
    }
  };
</script>
:::

````


4. `docs/.vuepress/config.js` `sidebar`配置下新增

此时就可以在 md 里面使用 du-button 组件继续调试了

```js
module.exports = {
  ...
  themeConfig {
    sidebar: {
      '/components/': [{
        children: [
          ...
          + 'base/button',
        ]
      }]
    },
  }
}
```
