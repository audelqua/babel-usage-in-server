import http from 'http'

const customServer = http.createServer(function(req, res) {
    res.end('some text from the server')
}).listen(8080)

export default customServer