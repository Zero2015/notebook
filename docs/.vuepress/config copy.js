module.exports = {
  locales: {
    '/': {
      lang: 'zh-Hans-CN',
      title: 'Zero',
      description: '来到这世上，总得留下点什么吧！！ - 一名低调的程序猿'
    },
    // '/en/': {
    //     lang: 'en-US',
    //     title: 'VuePress',
    //     description: ''
    // }
  },
  // 主题模板配置
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        nav: [
          { text: '笔记', link: '/notes/' },
          { text: '面试题', link: '/interview/' },
          // { text: '开源项目', link: '/project/' },
          // {
          //     text: '自我提升',
          //     ariaLabel: 'Language Menu',
          //     items: [
          //         { text: '阅读书单', link: '/booklist' },
          //         { text: '每日反思', link: '/think' },
          //         { text: '每日计划', link: '/plans' },
          //     ]
          // },
          { text: 'GitHub', link: 'https://github.com/Zero2015/Front-End-Interview-Notebook' },
        ],
        sidebar: {
          '/notes/': [
            ['', '目录'],
            { title: 'HTML', collapsable: false, children: [] },
            { title: 'CSS' },
            {
              title: 'JavaScript', 
              collapsable: false, 
              children: []
            },
            { title: 'Vue' },
            { title: 'React' },
            { title: 'Node' },
            { title: 'Webpack' },
            { title: 'TypeScript' },
            {
              title: '其他', children: [
                'shadowsocks.md'
              ]
            },
          ],
          '/interview/': [
            ['', '目录'],
            ['html', 'HTML'],
            ['css', 'CSS'],
            ['javascript', 'JavaScript'],
            ['vue', 'Vue'],
          ],
          '/project/': [
            ['', '目录'],
          ]
        }
      },
      // '/en/': {
      //     label: 'English',
      //     nav: [
      //         { text: 'Documentation', link: '/en/docs/' }
      //     ],
      //     sidebar: {}
      // }
    }
  },
  // markdown 配置
  markdown: {
    plugins: ['task-lists']
  }
}