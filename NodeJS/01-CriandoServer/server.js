const {createServer}=require('http')

let server= createServer( (request, response)=>{
  response.writeHead(200,{"Context-Type":"text/html"})
  response.write("<h1>Olá Mundo</h1>")
  response.end()

})

server.listen(8000)
console.log("Escutando a porta 8000")