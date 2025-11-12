# TimePickerPro

#### 介绍

element-ui [TimePicker](https://element.eleme.cn/#/zh-CN/component/time-picker)二次封装。基于原组件进行一些扩展，原组件的所有属性、方法、插槽可继续按原方式使用。<br/>
当前组件<span style="color: #3EAF7C;font-weight: 500;">TimePickerPro</span>拓展新增了两个属性`custom-minute-step`和`custom-second-step`进行分钟数和秒钟数自定义步距。
> 注意：当前组件内部有引用element-ui进行拓展，引用该组件时，项目需要安装并引入element-ui <br />

::: demo

```html
<template>
  <div class="cell">
    <span>单个时间：</span>
    <du-time-picker-pro
      v-model="singleTime1"
      :custom-minute-step="20"
      :custom-second-step="10"
      placeholder="请选择时间"
    ></du-time-picker-pro>
  </div>
  <div class="cell">
    <span>时间范围：</span>
    <du-time-picker-pro
      v-model="multipleTime1"
      is-range
      :custom-minute-step="20"
      :custom-second-step="10"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    ></du-time-picker-pro>
  </div>
  <div class="cell">
    <span>箭头单个时间：</span>
    <du-time-picker-pro
      v-model="singleTime2"
      arrow-control
      :custom-minute-step="10"
      :custom-second-step="15"
      placeholder="请选择时间"
    ></du-time-picker-pro>
  </div>
  <div class="cell">
    <span>箭头时间范围：</span>
    <du-time-picker-pro
      v-model="multipleTime2"
      is-range
      arrow-control
      :custom-minute-step="10"
      :custom-second-step="15"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    ></du-time-picker-pro>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        singleTime1: '',
        multipleTime1: [],
        singleTime2: '',
        multipleTime2: [],
      };
    }
  }
</script>
<style>
div[class*="timePickerPro"] .demo-content .cell {
  display: inline-block;
  margin: 0 15px 15px 0;
}
.demo-block .cell >span {
  display: inline-block;
  width: 115px;
  text-align: right;
}
</style>

```

:::

### Attribute

| 参数          | 说明                                                     | 类型    | 可选值 | 默认值 |
| ------------- | ------------------------------------------------------- | ------- | ------ | ----- |
| custom-minute-step    | 分钟数自定义步距，若大于`59`，则只显示`0`           | string、number  | 自然数     | 1     |
| custom-second-step    | 秒钟数自定义步距，若大于`59`，则只显示`0`           | string、number  | 自然数      | 1     |

>其他选项可以参照element-ui [TimePicker](https://element.eleme.cn/#/zh-CN/component/time-picker)