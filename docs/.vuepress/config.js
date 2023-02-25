module.exports = {
    title: '运营文档',
    description: '专业代运营',
    base: './',
    // theme: '/',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig: {
        // lastUpdated: '上次更新',
        subSidebar: 'auto',
        sidebar: [
            {
                title: '首页',
                path: '/',
                collapsable: false,
                children: [
                    { title: "团队介绍", path: "/brooke/01" }
                ]
            },
            {
              title: "渠道平台",
              path: '/brooke/01',
              collapsable: false,
              children: [
                { title: "我们的优势", path: "/brooke/01" },
                { title: "合作流程", path: "/brooke/01" }
              ],
            }
          ]
    }
}