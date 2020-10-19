module.exports = {
  "title": "谢夏戈的博客",
  "description": "",
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
        "link": "/docs/notebook/"
      },
      {
        "text": "小黄鸭",
        "icon": "reco-other",
        "link": "/docs/BathDuck/"
      },
      {
        "text": "项目",
        "icon": "reco-api",
        "items": [
          {"text": "🍋🍋🍋🍋🍋🍋🍋",  "items": [{ "text": "【项目笔记】", "link": "/docs/project/"}]}, 
          {"text": "🥭🥭🥭🥭🥭🥭🥭",  
           "items": [
              { "text": "💠 Veronica", "link": "https://xxggg.gitee.io/Veronica/","target":'_blank'},
              { "text": "💠 vue2-demo", "link": "https://xxggg.gitee.io/vue2-demo/","target":'_blank'}
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
      "/docs/notebook/": [
        "",  

        "【HTML】小笔记",
        "【CSS】小笔记",
        "【JavaScript】小笔记",
        "flex布局",

        "【HTML】大笔记",
        "【CSS】大笔记",
        "【JavaScript】大笔记",

        "commit规范",
        "Git",
        "SSH-公钥私钥",  
        "Sass",

        "vue2.x",
        "vue3.0",
        "vue-cli 3",
        "vue-router",
        "vue-vuex",
        "Vue-axios",

        "奇奇怪怪的面试题"
      ],
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
        "Demo"
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 5,
        "text": "分类"
      },
      "tag": {
        "location": 6,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "谢夏戈的博客（GitHub）xxggg.github.io",
        "desc": "GitHub Pages 部署的博客",
        // "email": "534464179@qq.com",
        "link": "https://xxggg.github.io"
      },
      {
        "title": "谢夏戈的博客（码云) xxggg.gitee.io",
        "desc": "Gitee Pages 同步 Github Pages内容的 ， “xxggg.github.io”登陆不上时可以登陆这个！.",
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