import DateTimePickerPro from './DateTimePickerPro/index';

const components = [
  DateTimePickerPro,
];

const install = function (Vue, options = {}) {
  console.log('vue install ducrong-ui options', options);
  console.log('vue install ducrong-ui installed', install.installed);

  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

export default {
  install,
  DateTimePickerPro,
};