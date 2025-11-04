/**
 * 扩展 VuePress 应用
 */


import DucrongUI from '../../packages/index'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

export default ({
  Vue,
  isServer
}) => {
  if (!isServer) {
    Vue.use(ElementUI)
    Vue.use(DucrongUI)
  }
}