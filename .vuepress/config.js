module.exports = {
  title: "GX BLOG",
  description: 'alt er love',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Docs', 
        link:'/docs/',
        icon: 'reco-blog',
        items:[
          { text: 'css' , link:'./docs/css/' },
          { text: 'javascript基础' , link:'/docs/javascript/' },
          { text: 'ES6' , link:'/docs/es6/'},
          { text: '相关协议' , link:'/docs/agreement/' },
          { text: '浏览器基础' , link:'/docs/browser/' },
          { text: '前端性能问题' , link:'/docs/performance/' },
          { text: 'webpack' , link:'/docs/webpack/' },
        ]
      },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: '掘金', link: 'https://juejin.im', icon: 'reco-juejin' },
      { text: 'GitHub', link: 'https://github.com/missgx-1996', icon: 'reco-github' }
      // { text: '无病呻吟', link: '/docs/articles/'}
    ],
    // sidebar: {
    //   '/docs/theme-reco/': [
    //     '',
    //     'theme',
    //     'plugin',
    //     'api'
    //   ]
    // }, 
    sidebar:{
      '/docs/css/': [
        {
          title: 'css',
          path: '/docs/css/',
          children: [
            { title: '前言', path: '/docs/css/' },
            { title: 'BFC', path: '/docs/css/BFC' },
            { title: '水平垂直居中', path: '/docs/css/水平垂直居中' },
            { title: '两（三）栏布局', path: '/docs/css/多栏布局' },
            { title: '上中下布局', path: '/docs/css/上中下布局' }
          ]
        }
      ],
      '/docs/javascript/': [
        {
          title: 'Javascript',
          path: '/docs/javascript/',
          // collapsable: false, // 可选的, 默认值是 true,
          // sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '前言', path: '/docs/javascript/'},
            { title: '原型', path: '/docs/javascript/原型'},
            { title: '执行环境、作用域、闭包', path: '/docs/javascript/闭包'},
            { title: '继承', path: '/docs/javascript/继承'},
            { title: 'this', path: '/docs/javascript/this'}
          ]
        }, {
          title: 'JS进阶',
          path: '/docs/javascript/js进阶',
          children: [
            { title: '前言', path: '/docs/javascript/js进阶/'},
            { title: '设计模式', path: '/docs/javascript/js进阶/设计模式'}
          ]
        }
      ],
      '/docs/agreement/': [
        {
          title: '网络协议',
          path: '/docs/agreement/',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '前言', path: '/docs/agreement/'}
          ]
        }
      ],
      '/docs/browser/': [
        {
          title: '浏览器原理',
          path: '/docs/browser/',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '前言', path: '/docs/browser/'}
          ]
        }
      ],
      '/docs/performance/': [
        {
          title: '前端性能',
          path: '/docs/performance/',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '前言', path: '/docs/performance/'}
          ]
        }
      ],
      '/docs/webpack/': [
        {
          title: 'webpack',
          path: '/docs/webpack/',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '前言', path: '/docs/webpack/'},
            { title: '概念', path: '/docs/webpack/概念'},
            { title: '构建过程', path: '/docs/webpack/构建过程'}
          ]
        }
      ]
      // '/docs/articles/': [
      //   {
      //     title: '无病呻吟',
      //     path: '/docs/articles/',
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1,    // 可选的, 默认值是 1
      //     children: [
      //       { title: '前言', path: '/docs/articles/'}
      //     ]
      //   }
      // ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    // friendLink: [
    //   {
    //     title: '午后南杂',
    //     desc: 'Enjoy when you can, and endure when you must.',
    //     email: '1156743527@qq.com',
    //     link: 'https://www.recoluan.com'
    //   },
    //   {
    //     title: 'vuepress-theme-reco',
    //     desc: 'A simple and beautiful vuepress Blog & Doc theme.',
    //     avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     link: 'https://vuepress-theme-reco.recoluan.com'
    //   },
    // ],
    logo: '/logo.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'gaoxin',
    // 作者头像
    authorAvatar: '/avatar.jpg',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2020'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-pagation'], 
    ['@vuepress-reco/vuepress-plugin-screenfull', true],
    ['@vuepress/medium-zoom']
  ]
}  
