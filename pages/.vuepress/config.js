const data = require('./public/4ko.json')

const web4ko = {
  text: 'WEB 四格漫画',
  link: '/4ko/10000.md',
  children: []
}
const special4ko = {
  text: '特别篇 四格漫画',
  link: '/4ko/20001.md',
  children: []
}
const limit4ko = {
  text: '限定 四格漫画',
  link: '/4ko/30001.md',
  children: []
}
const musicDawn4ko = {
  text: 'MusicDawn 四格漫画',
  link: '/4ko/90001.md',
  children: []
}
data.forEach(item => {
  const key = `${item[0]}`
  const { title, name } = item[1]
  if (key.startsWith('9')) {
    musicDawn4ko.children.push({
      text: `第${item[0] - 90000}话 ${title}`,
      link: `/4ko/${key}.md`
    })
  } else if (key.startsWith('1')) {
    web4ko.children.push({
      text: `第${item[0] - 10000}话 ${title}`,
      link: `/4ko/${key}.md`
    })
  } else if (key.startsWith('2')) {
    special4ko.children.push({
      text: `第${item[0] - 20000}话 ${title}`,
      link: `/4ko/${key}.md`
    })
  } else if (key.startsWith('3')) {
    limit4ko.children.push({
      text: `第${item[0] - 30000}话 ${title}`,
      link: `/4ko/${key}.md`
    })
  }
})

module.exports = {
  lang: 'zh-CN',
  title: '闪耀色彩 四格漫画',
  description: '偶像大师闪耀色彩的四格漫画汉化版',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['style', { type: 'text/css' }, `.sidebar-heading+ul {
      display: none;
    }
    .sidebar-heading.active+ul {
      display: block;
    }`],
    ['script', { src: 'https://static.cloudflareinsights.com/beacon.min.js?token=41f8947cda59499cb3e5bad5d246d75d', defer: true }]
  ],
  themeConfig: {
    logo: '/icon.png',
    repo: 'https://github.com/ShinyGroup/Comics',
    editLink: false,
    lastUpdated: false,
    contributors: false,
    search: false,
    navbar: [
      {
        text: '汉化插件',
        children: [
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
        text: '前言',
        link: '/'

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