module.exports = {
    title: '谢夏戈',
    description: 'My First Blog',
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/logo.png'}]
    ],
    base: '/',// 部署到github的相关配置
    //主题配置
    themeConfig: {
        //logo
        logo: './logo.png', 
        //导航栏链接
        nav:[
            { text: 'Home', link: '/' },
            {
              text: '学习路径',
              ariaLabel: 'lrean',
              items: [
                  { text:'HTML', link: './HTML'},
                  { text:'CSS', link: './CSS'}
              ]
            },
            { text: 'GitHub', link: 'https://github.com/XXGGG' },
        ],
        //侧边栏
        sidebar: 'auto',
        //不兼容ie 就选true
        evergreen :true
    },
}