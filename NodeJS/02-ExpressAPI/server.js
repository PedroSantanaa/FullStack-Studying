let express=require('express')
let app=express()


app.get('/',(request,response)=>{
  response.send("Primeira rota com express")
})

app.listen(3000 ,()=>{
  console.log("Servidor rodando na porta 3000")
})

