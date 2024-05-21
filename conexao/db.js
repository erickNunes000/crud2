const Sequelize = require("sequelize")

const db = new Sequelize("dbapicarros","root", "1234",{
    host:"localhost",
    dialect:"mysql"
})

db.authenticate().then(()=>console.log("connected to database")).catch(e=>console.log(e.message))

module.exports = db