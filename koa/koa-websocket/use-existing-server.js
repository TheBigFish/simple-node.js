
const Koa = require('koa')
const Router = require('koa-router')
const http = require('http') // or 'https'
const webSockify = require('koa-websocket')

const app = new Koa()
const router = new Router()
const server = http.createServer(app.callback())

// WebSocket routes
router.get('/*', (ctx) => {
    ctx.websocket.send('Hello World')
    ctx.websocket.on('message', (message) => {
        console.log(message)
    })
})

webSockify(app)
app.ws
    .use(router.routes())
    .use(router.allowedMethods())

const httpRouter = Router()
httpRouter.get('/h1', (ctx) => {
    ctx.status = 200
    ctx.body = 'Hello h1!'
})
app.use(httpRouter.routes()).use(httpRouter.allowedMethods())

// attach WebSockets to existing server
app.ws.listen({
    server
})

// start server
server.listen(3000)
