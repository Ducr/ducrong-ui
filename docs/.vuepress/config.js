module.exports = {
  title: 'Ducrong UI', // 设置网站标题
  base: process.env.NODE_ENV === 'production' ? '/ducrong-ui/' : '/', // 设置生产环境站点根路径
  description: 'UI 组件库', // 描述
  dest: './dist', // 设置输出目录
  port: 1000, // 端口
  plugins: ['demo-container'],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Ducrong UI"
    }
  },
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '组件',
        link: '/components/'
      },
      {
        text: '源码',
        link: 'https://github.com/Ducr/ducrong-ui'
      },
    ],
    // 侧边栏菜单
    sidebar: {
      '/components/': [
        {
          title: '组件',
          collapsable: false,
          children: [
            'element/dateTimePickerPro',
          ]
        },
      ],
      '/guide/': [{
        title: '指南',
        collapsable: false,
        children: [
          'getting-started',
          'directory',
          'component',
          'change-log',
        ]
      }],
    },
    lastUpdated: '上次更新',
    cache: false,
  }
}