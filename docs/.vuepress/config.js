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
        nav: [
          {
            text: '笔记',
            ariaLabel: 'Reading notes',
            items: [
              { text: 'JavaScript', link: '/notes/JavaScript/' },
            ]
          },
          // { text: '笔记', link: '/notes/' },
          { text: 'GitHub', link: 'https://github.com/Zero2015/Front-End-Interview-Notebook' },
        ],
        sidebar: {
          '/notes/': [
            ['', '目录'],
          ],
          
        }
      },
    }
  },
  // markdown 配置
  markdown: {
    plugins: ['task-lists']
  }
}