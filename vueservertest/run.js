const express = require('express')
const appComp = require('./dist/server')
const app = express()
const server = require("vue-server-renderer")

app.get('/', async (req, res) => {
  var render = server.createRenderer()
  console.log(appComp)
  render.renderToString(appComp.createComp(), (err, html) => {
    console.log(html)
    res.send(`
    <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
    <div id="app">${html}</div>
    </body>
    </html>
      `);

  })
})

app.use(express.static('.'))
app.listen(3000, function() {
    console.log('app listening on port 3000')
})