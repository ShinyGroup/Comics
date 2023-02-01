import { defineConfig } from 'vitepress'
import data from './public/4ko.json'

const web4ko = {
  text: 'WEB 四格漫画',
  collapsed: true,
  items: []
}
const special4ko = {
  text: '特别篇 四格漫画',
  collapsed: true,
  items: []
}
const limit4ko = {
  text: '限定 四格漫画',
  collapsed: true,
  items: []
}
const musicDawn4ko = {
  text: 'MUSIC DAWN 四格漫画',
  collapsed: true,
  items: []
}
data.forEach(item => {
  const key = `${item[0]}`
  const { title, name } = item[1]
  if (key.startsWith('9')) {
    musicDawn4ko.items.push({
      text: `第${item[0] - 90000}话 ${title}`,
      link: `/4ko/${key}.md`
    })
  } else if (key.startsWith('1')) {
    web4ko.items.push({
      text: `第${item[0] - 10000}话 ${title}`,
      link: `/4ko/${key}.md`
    })
  } else if (key.startsWith('2')) {
    special4ko.items.push({
      text: `第${item[0] - 20000}话 ${title}`,
      link: `/4ko/${key}.md`
    })
  } else if (key.startsWith('3')) {
    limit4ko.items.push({
      text: `第${item[0] - 30000}话 ${title}`,
      link: `/4ko/${key}.md`
    })
  }
})


export default defineConfig({
  lang: 'zh-CN',
  title: '闪耀色彩 四格漫画',
  description: '偶像大师闪耀色彩的四格漫画汉化版',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['style', { type: 'text/css' }, `.nav .group:nth-child(2) .level-0 {
      padding-bottom: 10px;
    }
    @media screen and (min-width: 720px) {
      .theme-default-content:not(.custom) img {
        max-width: fit-content;
      }
    }`],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-GD5D4E02T0' }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-GD5D4E02T0');`]
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '/icon.png',
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
        text: '前言',
        link: '/',
        items: [
        ]
      },
      web4ko,
      special4ko,
      limit4ko,
      musicDawn4ko
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ShinyGroup/Comics' },
    ]
  }
})