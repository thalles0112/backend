import { Sequelize } from "sequelize";

const database = new Sequelize({
    dialect: 'mysql',
    database: 'sql10745504',
    user: 'sql10745504',
    password: 'vMyHxjftqS',
    host: 'sql10.freesqldatabase.com',
    port: 3306,
    username: 'sql10745504'
    
})


try{
    database.authenticate()
    database.sync()
}

catch (err){
    console.error('nao deu pra entrar no banco de dados por que:',err)
}
finally{
    console.log('banco de dados autenticado')
    
}


export default database