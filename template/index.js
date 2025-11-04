module.exports = {
  entryTemplate: (componentName) => {
    return `import ${componentName} from './src/index.vue';${componentName}.install = function(Vue) {Vue.component(${componentName}.name, ${componentName});};export default ${componentName};`;
  }
};