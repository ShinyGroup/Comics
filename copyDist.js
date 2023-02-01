const fs = require('fs-extra')

fs.copySync('./pages/.vitepress/public/', './dist/')
fs.copySync('./pages/.vitepress/dist/', './dist/')