const data = require('./public/4ko.json')

const web4ko = {
  text: 'WEB 4格漫画',
  link: '/web4ko',
  children: []
}
const special4ko = {
  text: '特别篇 4格漫画',
  link: '/special',
  children: []
}
const limit4ko = {
  text: '限定 4格漫画',
  link: '/limit',
  children: []
}
data.forEach(item => {
  const key = `${item[0]}`
  const { title, name } = item[1]
  if (key.startsWith('1')) {
    web4ko.children.push({
      text: `第${item[0] - 10000}话 ${title}`,
      link: `/${key}.md`
    })
  }
  if (key.startsWith('2')) {
    special4ko.children.push({
      text: `第${item[0] - 20000}话 ${title}`,
      link: `/${key}.md`
    })
  }
  if (key.startsWith('3')) {
    limit4ko.children.push({
      text: `第${item[0] - 30000}话 ${title}`,
      link: `/${key}.md`
    })
  }
})
module.exports = {
  lang: 'zh-CN',
  title: '闪耀色彩 四格漫画',
  description: '偶像大师闪耀色彩的四格漫画汉化版',

  themeConfig: {
    sidebar: [
      web4ko,
      special4ko,
      limit4ko
    ],
  },
}