const data = require('./dist/4ko.json')
const fs = require('fs-extra')

data.forEach(item => {
  const key = `${item[0]}`
  const { title, name } = item[1]
  let header = ''
  if (key.startsWith('1')) {
    header = `第${item[0] - 10000}话 ${title}`
  } else if (key.startsWith('2')) {
    header = `第${item[0] - 20000}话 ${title}`
  } else if (key.startsWith('3')) {
    header = `第${item[0] - 30000}话 ${title}`
  }
  const content = `### ${header}
![](/4ko/${name})`
  fs.outputFileSync(`./pages/${key}.md`, content)
})