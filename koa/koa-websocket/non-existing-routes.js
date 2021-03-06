const Koa = require('koa')
const Router = require('koa-router')
const webSockify = require('koa-websocket')

const app = new Koa()
const router = new Router()

// WebSocket routes
router.get('/websocket', (ctx) => {
    ctx.websocket.send('Hello World')
    ctx.websocket.on('message', (message) => {
        console.log(message)
    })
})

// "404" handler for non-existing WebSockets
router.get('/*', (ctx) => {
    // @TODO: might not be the correct error code
    ctx.websocket.close(4004, `ERROR: route '${ctx.url}' is not implemented`)
})

webSockify(app)
app.ws
    .use(router.routes())
    .use(router.allowedMethods())

// start server
app.listen(3000)
