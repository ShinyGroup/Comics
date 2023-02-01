const data = require('./dist/4ko.json')
const fs = require('fs-extra')

const getHeader = (data) => {
  const key = `${data[0]}`
  const { title, name } = data[1]
  let header = ''
  if (key.startsWith('9')) {
    header = `第${data[0] - 90000}话 ${title}`
  } else if (key.startsWith('1')) {
    header = `第${data[0] - 10000}话 ${title}`
  } else if (key.startsWith('2')) {
    header = `第${data[0] - 20000}话 ${title}`
  } else if (key.startsWith('3')) {
    header = `第${data[0] - 30000}话 ${title}`
  }
  return [header, key]
}

let prev = ''
let next = ''
data.forEach((item, index) => {
  const key = `${item[0]}`
  const { title, name } = item[1]
  let header = getHeader(item)

  if (data[index - 1]) {
    let [text, link] = getHeader(data[index - 1])
    prev = `prev: '${text}'`
  } else {
    prev = ''
  }

  if (data[index + 1]) {
    let [text, link] = getHeader(data[index + 1])
    next = `next: '${text}'`
  } else {
    next = ''
  }


  const content = `---
title: ${header[0]}
description: 偶像大师闪耀色彩的四格漫画 ${header[0]}
aside: false
---
<h1 style="text-align:center">${header[0]}</h1>
<p style="display:flex;justify-content:center;">
  <img src="/4ko/${name}" alt="${header[0]}">
</p>
`
  fs.outputFileSync(`./pages/4ko/${key}.md`, content)
  fs.copySync('./dist/4ko.json', './pages/.vitepress/public/4ko.json')
})