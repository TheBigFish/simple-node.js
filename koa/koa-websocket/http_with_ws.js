
const Koa = require('koa')
const Router = require('koa-router')
const webSockify = require('koa-websocket')

const app = new Koa()
const httpRouter = new Router()
const wsRouter = new Router()

// HTTP routes
httpRouter.get('/http', (ctx) => {
    ctx.body = 'Hello World'
})

app.use(httpRouter.routes())
    .use(httpRouter.allowedMethods())

// WebSocket routes
wsRouter.get('/websocket', (ctx) => {
    ctx.websocket.send('Hello World')
    ctx.websocket.on('message', (message) => {
        console.log(message)
    })
})

wsRouter.get('/*', (ctx) => {
    // @TODO: might not be the correct error code
    ctx.websocket.close(4004, `ERROR: route '${ctx.url}' is not implemented`)
})

webSockify(app)
app.ws
    .use(wsRouter.routes())
    .use(wsRouter.allowedMethods())

// start server
app.listen(3000)
