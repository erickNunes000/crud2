const express = require("express")
const alunoRoutes = express.Router()
const alunoController = require("./controllers/AlunoController")

alunoRoutes.use(express.urlencoded({extended:true}))
alunoRoutes.use(express.json())


alunoRoutes.get("/alunos", async (req, res)=>{
    const alunos = await alunoController.listar()
    res.send(alunos)
})
alunoRoutes.get("/aluno/:id", async (req, res)=>{
    let id = req.params.id
    const aluno = await alunoController.listar_aluno(id)
    res.send(aluno)
})

alunoRoutes.post("/aluno", async (req, res)=>{//criar alunos
    let id = req.body.id
    let nome = req.body.nome
    let sexo = req.body.sexo
    let ingresso = req.body.ingresso
    await alunoController.cadastrar(id,nome,sexo,ingresso).then((aluno)=>{
        res.json({
            erro:false,
            mensagem:"cadastrado com sucesso",
            dados:aluno
        })
     }).catch((e)=>res.status(400).send("erro ao criar"))
    //res.send(aluno)
})

alunoRoutes.put("/aluno",async (req, res)=>{ //atualizar aluno
    let id = req.body.id
    let nome = req.body.nome
    let sexo = req.body.sexo
    let ingresso = req.body.ingresso
    const aluno = await alunoController.atualizar(id,nome,sexo,ingresso)
    res.send(aluno)
})
alunoRoutes.delete("/aluno/:id", async (req, res)=>{ //deletar aluno
    //re.params.id
    let id = req.params.id
     let aluno = await alunoController.deletar_aluno(id)
    res.send(aluno)

})

module.exports = alunoRoutes