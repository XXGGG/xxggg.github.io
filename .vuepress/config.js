module.exports = {
  "title": "谢夏戈的博客",
  "description": "Welcome",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    'noFoundPageByTencent': false,
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },    
      {
        "text": "小笔记",
        "icon": "reco-blog",
        // "link": "/docs/notebook/"
        "items": [
          {"text": "🔮🔮🔮🔮🔮🔮🔮",  
           "items": [
              { "text": "『编程小笔记』", "link": "/docs/notebook/config/"},
              { "text": "『HTML』", "link": "/docs/notebook/HTML/"},
              { "text": "『CSS』", "link": "/docs/notebook/CSS/"},
              { "text": "『JavaScript』", "link": "/docs/notebook/JavaScript/"},
              { "text": "『Vue』项目流程记录", "link": "/docs/notebook/Vue/",},
              { "text": "『Node』搭建服务器流程", "link": "/docs/notebook/NodeXXG/",},
              { "text": "『Python』爬虫", "link": "/docs/notebook/Python/",},
              { "text": "『MySQL』数据库", "link": "/docs/notebook/MySQL/",},
           ]
          }
        ]
      },
      {
        "text": "小黄鸭",
        "icon": "reco-other",
        "link": "/docs/BathDuck/"
      },
      {
        "text": "我的作品",
        "icon": "reco-api",
        "items": [
          {"text": "🍋🍋🍋🍋🍋🍋🍋",  
           "items": [
              { "text": "【Veronica说明】", "link": "/docs/project/Veronica.md"},
              { "text": "💠 Veronica", "link": "https://xxggg.gitee.io/Veronica/","target":'_blank' },
           ]
          }, 
          {"text": "🥭🥭🥭🥭🥭🥭🥭",  
           "items": [
              { "text": "【Demo说明】", "link": "/docs/project/Demo.md" },
              { "text": "💠 Demo", "link": "https://xxggg.gitee.io/demo/","target":'_blank'}
           ]
          },
          {"text": "🍑🍑🍑🍑🍑🍑🍑",  
           "items": [
              { "text": "【XG词典说明】", "link": "/docs/project/XGDict.md" },
              { "text": "💠 XG词典", "link": "http://xxggg.gitee.io/xgdict/#/","target":'_blank'}
           ]
          },
          {"text": "🍱【Demo系列】🍱",  
           "items": [
              { "text": "前程无忧 - 移动端网页版", "link": "https://xxggg.github.io/Demo_cubeUI_51job_m/#/","target":'_blank'}
           ]
          }
        ]
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/XXGGG",
            "icon": "reco-github"
          },
          {
            "text": "bilibili",
            "link": "https://space.bilibili.com/5276030",
            "icon": "reco-bilibili"
          },
          {
            "text": "微博",
            "link": "https://weibo.com/u/2472496944",
            "icon": "reco-weibo"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/qq_42460209",
            "icon": "reco-csdn"
          },
        ]
      }
    ],
    "sidebar": {
      "/docs/BathDuck/": [
        "",
        "0001什么是【冒泡、捕获】",
        "0002什么是【跨域】",
        "0003什么是【异步、同步】",
        "0004【Babel】是什么",
        "0005【px，rem，em的区别】",
        "0006什么是【git hook】",
        "0007什么是【Ajax】",
        "0008什么是【npm】",
        "0009什么是【json】",
        "0010什么是【node】",
        "0011什么是【webpack】",
        "0012什么是【闭包】",
        "0013【css预处理器】",
        "0014什么是【耦合-解耦】",
        "0015什么是【Promise】",
        "0016什么是【套壳app】",
        "0017什么是【webp】"
      ],
      "/docs/project/": [
        "",
        "Veronica",
        "Demo",
        "XGDict",
        "The"
      ],

      "/docs/notebook/config/": [
        "",
        "Git",
        "SSH-公钥私钥",
        "commit规范",
        "Vue打包白屏问题"
      ],
      "/docs/notebook/CSS/": [
        "",
        "CSS常用代码",
        "CSS常用代码片段",
        "CSS完整笔记",
        "flex",
        "Sass",
        "iconfont",
        "雪碧图",
        "移动端优化",
      ],
      "/docs/notebook/HTML/": [
        "",
        "HTML",
        "HTML完整笔记",
      ],
      "/docs/notebook/JavaScript/": [
        "",
        "JavaScript",
        "JS笔记",
        "rem",
        "JS数组查找",
      ],
      "/docs/notebook/Vue/": [
        "",
        "Vue",
        "vue-cli 3.x",
        "vue-axios",
        "vue-router",
        "vue-vuex",
        "Vite",
        "vue中图片引入问题",
        "api接口单独文件",
      ],
      "/docs/notebook/NodeXXG/": [
        "",
        "Node搭建服务器流程",
        "Node外网访问本地服务器",
      ],
      "/docs/notebook/Python/": [
        "",
        "python01.md",
        "python02.md",
        "python03.md",
        "python04.md",
        "python05.md",
        "python06.md",
        "python07.md",
        "python08.md",
        "爬虫第零步.md",
        "爬虫第一步.md",
      ],
      "/docs/notebook/MySQL/": [
        "",
        "SQL.md",
        "MySQL.md",
        "Python-MySQL.md",
      ],
    },
    "type": "blog",
    // "blogConfig": {
    //   "category": {
    //     "location": 5,
    //     "text": "分类"
    //   },
    //   "tag": {
    //     "location": 6,
    //     "text": "标签"
    //   }
    // },
    "friendLink": [
      {
        "title": "谢夏戈的博客（GitHub）xxggg.github.io",
        "desc": "GitHub Pages 博客",
        // "email": "534464179@qq.com",
        "link": "https://xxggg.github.io"
      },
      {
        "title": "谢夏戈的博客（码云) xxggg.gitee.io",
        "desc": "Gitee Pages 博客",
        // "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://xxggg.gitee.io"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 100,
    "lastUpdated": "最后更新",
    "author": "谢夏戈",
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}