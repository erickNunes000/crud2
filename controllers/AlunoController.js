//const db = require("../conexao/db")

const Aluno = require("../models/Aluno")

class AlunoController{
    async listar(){
        const alunos = await Aluno.findAll()
        return alunos
    }

    async listar_aluno(id){
        const aluno = await Aluno.findAll({
            where:{
                id:id
            }
        })
        return aluno
    }

    async deletar_aluno(id){
       const aluno =  await Aluno.destroy({
            where:{
                id:id
            }
        })
        return aluno;
    }

    async cadastrar(id, nome, sexo, ingresso){
      const aluno =   await Aluno.create({
            id:id,
            nome:nome,
            sexo:sexo,
            ingresso:ingresso
        })
        return aluno;
    }

    async atualizar(id, nome, sexo, ingresso){
        const aluno = await Aluno.update({
            nome:nome,
            sexo:sexo,
            ingresso:ingresso
        },{
            where:{
                id:id
            }
        })
        return aluno;
    }

}

module.exports = new AlunoController()