module.exports = {
  dest: './dist',
  locales: {
    '/': {
      lang: 'zh-Hans-CN',
      title: 'Zero',
      description: '来到这世上，总得留下点什么吧！！ - 一名低调的程序猿'
    },
  },
  // 主题模板配置
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        nav: require('./config/nav')['zh_CN'],
        sidebar: require('./config/sidebar')['zh_CN']
      },
    }
  },
  extraWatchFiles: [
    '.vuepress/config/nav.js',
    '.vuepress/config/sidebar.js'
  ],
  // 博客永久链接
  // permalink: "/:year/:month/:day/:slug",
  // vuepress 插件
  plugins: [
    'flowchart'
  ],
  // markdown 配置
  markdown: {
    plugins: [
      'task-lists',
    ]
  }
}