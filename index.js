


const express = require("express")
const server  = express()
const cors = require("cors")
const alunoRoutes = require("./alunoRoutes")
const porta = 8080

server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())


server.use("/api", alunoRoutes)

server.listen(porta, ()=>{
    console.log(`server running on port ${porta}`)
})