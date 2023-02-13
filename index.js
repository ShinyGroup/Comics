const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')

const Glob = glob.Glob
glob.promise = function (pattern, options) {
  return new Promise(function (resolve, reject) {
    var g = new Glob(pattern, options)
    g.once('end', resolve)
    g.once('error', reject)
  })
}

const cleanDist = () => fs.emptyDir('./dist/')
const moveComic = async () => {
  const pics = await glob.promise('./images/**/*.*')
  let data = new Map()
  for (let pic of pics) {
    let name = path.basename(pic)
    let rgs = name.match(/^(\d+)([-—－]([^.]+))?(\..+)?/)
    if (!rgs) {
      continue
    }
    let id = parseInt(rgs[1])
    let title = rgs[3]
    data.set(id, { title, name: `${id}${rgs[4]}` })
    await fs.copy(pic, `./pages/4ko/${id}${rgs[4]}`)
    await fs.copy(pic, `./dist/4ko/${id}${rgs[4]}`)
  }
  await fs.outputJSON('./dist/4ko.json', [...data])
}

const start = async () => {
  await cleanDist()
  await fs.ensureDir('./dist/4ko/')
  await moveComic()
  await fs.outputFile('./dist/CNAME', 'comic.shiny.fun')
}

start()