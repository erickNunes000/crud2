
const {Sequelize,DataTypes} = require("sequelize")
const db = require("../conexao/db")

const Aluno = db.define("Aluno", {
    
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
    },
    nome:{
        type:DataTypes.STRING
    },
    sexo:{
        type:DataTypes.ENUM,
        values:["m", "f"],
    },
    ingresso:{
        type:DataTypes.ENUM,
        values:["enem", "vestibular","transferido"],
        defaultValue:"vestibular"
    },

},
    {
        timestamps:false
    }
)
//Aluno.sync({alter:true})
module.exports = Aluno
