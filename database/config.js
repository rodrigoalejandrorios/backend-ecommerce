const mongoose = require('mongoose')


const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Conectado a la DB')
    }
    catch(err){
        console.error(err)
    }
}

module.exports = {dbConnection}