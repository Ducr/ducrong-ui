# DateTimePickerPro

#### 介绍

element-ui [DatePicker](https://element.eleme.cn/#/zh-CN/component/date-picker)和 [DateTimePicker](https://element.eleme.cn/#/zh-CN/component/datetime-picker) 二次封装。基于原组件进行一些扩展，原组件的所有属性、方法、插槽可继续按原方式使用。<br/>
当前组件<span style="color: #3EAF7C;font-weight: 500;">DateTimePickerPro</span>拓展新增了两个属性`custom-minute-step`和`custom-second-step`进行分钟数和秒钟数自定义步距。
> 注意：当前组件内部有引用element-ui进行拓展，引用该组件时，项目需要安装并引入element-ui <br />

::: demo

```html
<template>
  <div class="cell">
    <span>单个日期：</span>
    <du-date-time-picker-pro
      v-model="singleDate"
      type="date"
      placeholder="选择日期"
      value-format="yyyy/MM/dd"
      format="yyyy/MM/dd"
    ></du-date-time-picker-pro>
  </div>
  <div class="cell">
    <span class="demonstration">多个日期：</span>
    <du-date-time-picker-pro
      v-model="multipleDate"
      type="dates"
      placeholder="选择一个或多个日期"
    >
    </du-date-time-picker-pro>
  </div>
  <br />
  <div class="cell">
    <span>单个日期时间：</span>
    <du-date-time-picker-pro
      v-model="singleDateTime"
      type="datetime"
      placeholder="选择日期时间"
      default-time="06:00:00"
      :custom-minute-step="20"
      :custom-second-step="10"
      value-format="yyyy/MM/dd HH:mm:ss"
      format="yyyy/MM/dd HH:mm:ss"
    ></du-date-time-picker-pro>
  </div>
  <div class="cell">
    <span>日期时间范围：</span>
    <du-date-time-picker-pro
      v-model="multipleDateTime"
      type="datetimerange"
      :default-time="['09:00:00', '19:00:00']"
      :custom-minute-step="30"
      :custom-second-step="15"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy/MM/dd HH:mm:ss"
      format="yyyy/MM/dd HH:mm:ss"
    ></du-date-time-picker-pro>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        singleDate: '',
        multipleDate: '',
        singleDateTime: '',
        multipleDateTime: [],
      };
    }
  }
</script>
<style>
div[class*="dateTimePickerPro"] .demo-content .cell {
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

>其他选项可以参照element-ui [DatePicker](https://element.eleme.cn/#/zh-CN/component/date-picker)和 [DateTimePicker](https://element.eleme.cn/#/zh-CN/component/datetime-picker)