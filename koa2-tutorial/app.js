var grouped = ['one', 'two', 'three'].reduce(
    (r, v, i, a, k = v.length) => ((r[k] || (r[k] = [])).push(v), r),
    {}
)

const koa = require('koa')
const app = new koa()
app.listen(3000, () => {
    console.log('server is run at http://localhost:3000')
})
app.use(async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>Hello World</h1>'
})

var hello = '124'
