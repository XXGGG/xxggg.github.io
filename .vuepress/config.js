module.exports = {
  "title": "谢夏戈的博客",
  "description": "谢夏戈的博客",
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
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "测试",
        "icon": "reco-other",
        "items": [
          {
            "text": "试验田",
            "link": "/docs/theme-reco/"
          }
        ]
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
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
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