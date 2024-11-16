import { Sequelize } from "sequelize";

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})


try{
    database.authenticate()
}

catch (err){
    console.error('nao deu pra entrar no banco de dados por que:',err)
}
finally{
    console.log('deu sim')
    database.sync()
}


export default database