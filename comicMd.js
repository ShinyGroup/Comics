const data = require('./dist/4ko.json')
const fs = require('fs-extra')

const getHeader = (data) => {
  const key = `${data[0]}`
  const { title, name } = data[1]
  let header = ''
  let type = ''
  if (key.startsWith('9')) {
    header = `第${data[0] - 90000}话 ${title}`
    type = 'musicdawn'
  } else if (key.startsWith('1')) {
    header = `第${data[0] - 10000}话 ${title}`
    type = 'web'
  } else if (key.startsWith('2')) {
    header = `第${data[0] - 20000}话 ${title}`
    type = 'special'
  } else if (key.startsWith('3')) {
    header = `第${data[0] - 30000}话 ${title}`
    type = 'limit'
  }
  return [header, key, type]
}

let prev = ''
let next = ''
data.forEach((item, index) => {
  const key = `${item[0]}`
  const { title, name } = item[1]
  let header = getHeader(item)

  if (data[index - 1]) {
    let [text, link] = getHeader(data[index - 1])
    prev = `prev:
  text: ${text}
  link: /4ko/${link}.html`
  } else {
    prev = ''
  }

  if (data[index + 1]) {
    let [text, link] = getHeader(data[index + 1])
    next = `next:
  text: ${text}
  link: /4ko/${link}.html`
  } else {
    next = ''
  }


  const content = `---
${prev}
${next}
tags:
  - ${key}
  - ${title}
---
<h1 style="text-align:center">${header[0]}</h1>

![](/4ko/${name})`
  fs.outputFileSync(`./pages/4ko/${key}.md`, content)
  fs.copySync('./dist/4ko.json', './pages/.vuepress/public/4ko.json')
})