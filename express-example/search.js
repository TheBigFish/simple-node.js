var requesta = require('superagent')

module.exports = function search (query, fn) {
    requesta.get('www.baidu.com')
    .query({q : query})
    .end(function (res) {
        if (res.body && Array.isArray(res.body.results)) {
            return fn(null, res.body.results)
        }
        fn(new Error('Bad twitter response'))
    })
}