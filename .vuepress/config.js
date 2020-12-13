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
              { "text": "『CSS』", "link": "/docs/notebook/CSS/"},
              { "text": "『HTML』", "link": "/docs/notebook/HTML/"},
              { "text": "『JavaScript』", "link": "/docs/notebook/JavaScript/"},
              { "text": "『Vue』项目流程记录", "link": "/docs/notebook/Vue/",},
              { "text": "『Node』搭建服务器流程", "link": "/docs/notebook/Node/",},
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
              { "text": "💠 Demo", "link": "https://xxggg.gitee.io/vue2-demo/","target":'_blank'}
           ]
          },
          {"text": "🍑🍑🍑🍑🍑🍑🍑",  
           "items": [
              { "text": "【XG词典说明】", "link": "/docs/project/XGDict.md" },
              { "text": "💠 XG词典", "link": "http://xxggg.gitee.io/xgdict/#/","target":'_blank'}
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
        "0001什么是",
        "0002webpack",
        "0003json",
        "0004npm",
        "0005node.js",
        "0006Ajax",
        "0007闭包",
        "0008css预处理器"
      ],
      "/docs/project/": [
        "",
        "Veronica",
        "Demo",
        "XGDict"
      ],

      "/docs/notebook/config/": [
        "",
        "Git",
        "SSH-公钥私钥",
        "commit规范"
      ],
      "/docs/notebook/CSS/": [
        "",
        "CSS常用代码",
        "CSS常用代码片段",
        "CSS完整笔记",
        "flex",
        "Sass",
      ],
      "/docs/notebook/HTML/": [
        "",
        "HTML",
        "HTML完整笔记",
      ],
      "/docs/notebook/JavaScript/": [
        "",
        "JavaScript",
        "JavaScript完整笔记",
      ],
      "/docs/notebook/Vue/": [
        "",
        "vue-cli 3.x",
        "vue-axios",
        "vue-router",
        "vue-vuex",
        "Vite",
      ],
      "/docs/notebook/Node/": [
        "",
        "Node搭建服务器流程",
        "Node外网访问本地服务器",
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