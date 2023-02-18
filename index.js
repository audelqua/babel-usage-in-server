import http from 'http'

const customServer = http.createServer(function(req, res) {
    res.end('<h1>hello im h1</h1>')
}).listen(8080)

export default customServer