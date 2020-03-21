const express = require('express')
const {render} = require('./dist/main_server')
const app = express()

app.get('/', function(req, res) {
    res.send(`
    <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
    <div id="app">${render()}</div>
    <!--导入 Webpack 输出的用于浏览器端渲染的 JS 文件-->
    <script src="./dist/bundle_browser.js"></script>
    </body>
    </html>
      `);
})

app.use(express.static('.'))
app.listen(3000, function() {
    console.log('app listening on port 3000')
})