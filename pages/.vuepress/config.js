const data = require('./public/4ko.json')

const web4ko = {
  title: 'WEB 四格漫画',
  children: []
}
const special4ko = {
  title: '特别篇 四格漫画',
  children: []
}
const limit4ko = {
  title: '限定 四格漫画',
  children: []
}
const musicDawn4ko = {
  title: 'MusicDawn 四格漫画',
  children: []
}
data.forEach(item => {
  const key = `${item[0]}`
  const { title, name } = item[1]
  if (key.startsWith('9')) {
    musicDawn4ko.children.push({
      title: `第${item[0] - 90000}话 ${title}`,
      path: `/4ko/${key}.md`
    })
  } else if (key.startsWith('1')) {
    web4ko.children.push({
      title: `第${item[0] - 10000}话 ${title}`,
      path: `/4ko/${key}.md`
    })
  } else if (key.startsWith('2')) {
    special4ko.children.push({
      title: `第${item[0] - 20000}话 ${title}`,
      path: `/4ko/${key}.md`
    })
  } else if (key.startsWith('3')) {
    limit4ko.children.push({
      title: `第${item[0] - 30000}话 ${title}`,
      path: `/4ko/${key}.md`
    })
  }
})
module.exports = {
  lang: 'zh-CN',
  title: '闪耀色彩 四格漫画',
  description: '偶像大师闪耀色彩的四格漫画汉化版',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  themeConfig: {
    logo: '/icon.png',
    repo: 'https://github.com/ShinyGroup/Comics',
    editLink: false,
    lastUpdated: false,
    contributors: false,
    search: false,
    nav: [
      {
        text: '汉化插件',
        items: [
          {
            text: '使用指南',
            link: 'https://github.com/biuuu/ShinyColors/blob/master/src/README.md'
          },
          {
            text: '提交翻译',
            link: 'https://github.com/ShinyGroup/SCTranslationData'
          }
        ]
      }
    ],
    sidebar: [
      {
        title: '前言',
        path: '/',

      },
      web4ko,
      special4ko,
      limit4ko,
      musicDawn4ko
    ],
  },
  plugins: [
  ]
}