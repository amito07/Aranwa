 const dbConfig = {
    HOST:'localhost',
    USER:'root',
    DB:'aranwa',
    PASSWORD:'',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
}

export default dbConfig;

