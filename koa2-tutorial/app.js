// var grouped = ['one', 'two', 'three'].reduce(
//     (r, v, i, a, k = v.length) => ((r[k] || (r[k] = [])).push(v), r),
//     {}
// )

// const koa = require('koa'),
//     route = require('koa-route'),
//     websockify = require('koa-websocket')

// const app = new koa()
// app.listen(3000, () => {
//     console.log('server is run at http://localhost:3000')
// })
// app.use(async (ctx, next) => {
//     await next()
//     ctx.response.type = 'text/html'
//     ctx.response.body = '<h1>Hello World</h1>'
// })

// var hello = '124'

//====================================

// const Koa = require('koa'),
//     route = require('koa-route'),
//     websockify = require('koa-websocket')

// //const app = new koa()
// const app = websockify(new Koa())

// app.listen(3000, () => {
//     console.log('server is run at http://localhost:3000')
// })

// app.use(async (ctx, next) => {
//     await next()
//     ctx.response.type = 'text/html'
//     ctx.response.body = '<h1>Hello World1</h1>'
// })

// app.ws.use(function(ctx, next) {
//     // return `next` to pass the context (ctx) on to the next ws middleware
//     return next(ctx)
// })

// // Using routes
// app.ws.use(
//     route.all('/test/:id', function(ctx) {
//         // `ctx` is the regular koa context created from the `ws` onConnection `socket.upgradeReq` object.
//         // the websocket is added to the context on `ctx.websocket`.
//         ctx.websocket.send('Hello World')
//         ctx.websocket.on('message', function(message) {
//             // do something with
//             ctx.websocket.send('Hello World')
//             console.log(message)
//         })

//         //console.log(ctx)
//     })
// )

// var hello = '124'

class WebChannelInterface {
    constructor() {
        this.methods = {}
    }

    invorkMethod(name, ...para) {
        this.methods[name](...para)
    }


}

class Func extends WebChannelInterface {
    constructor() {
        super()
        this.methods.a = function (a, b) {
            console.log(a)
        }
    }
}

a = new Func()
a.invorkMethod('a', 'b', 'c')