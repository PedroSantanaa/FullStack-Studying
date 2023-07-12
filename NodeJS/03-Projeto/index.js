const express = require('express')
const app = express()
const db= require('./db/connection')
const PORT=3000 


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

//db connection
db.authenticate().then(()=>{
  console.log('Conectou ao banco com sucesso!')
}).catch((error)=>{
  console.log('Ocorreu um erro ao conectar ao banco: '+error)
})

//routes
app.get('/', (req, res) => {
  res.send('Está funcionando!')
})
