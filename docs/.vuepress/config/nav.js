module.exports = {
	'zh_CN': [
		{ text: '首页', link: '/' },
		{ 
			text: '博客', 
			ariaLabel: 'weblog',
			items: [
				{ text: 'HTML', link: '' },
				{ text: 'CSS', link: '' },
				{ text: 'JavaScript', link: '' },
				{ text: '其他', link: '' },
			]
		},
		{
			text: '笔记',
			ariaLabel: 'notes',
			items: [
				{ text: 'JavaScript', link: '/notes/JavaScript/' },
			]
		},
		{
			text: '面试题',
			ariaLabel: 'interview',
			items: [
				{ text: 'HTML', link: '/interview/html' },
				{ text: 'CSS', link: '/interview/css' },
				{ text: 'JavaScript', link: '/interview/javascript' },
			]
		},
		{
			text: '关于',
			ariaLabel: 'about',
			items: [
				{ text: '阅读清单', link: '/about/booklist/' },
				{ text: '每日计划', link: '/about/plans/' },
				{ text: '吾日三省', link: '/about/think/' },
			]
		},
		{ text: 'GitHub', link: 'https://github.com/Zero2015/notebook' },
	]
}