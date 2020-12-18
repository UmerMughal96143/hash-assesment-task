const mongoose  = require('mongoose');




const connectDb = async () => {
    try {
        const con  = mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true ,
            useCreateIndex : true,
            useUnifiedTopology: true,
            useFindAndModify : false
        })
        console.log(`MongoDb connected`.cyan.underline.bold)
    } catch (err) {
        console.log(`Error ${err.message}`.red)
        process.exit(1);
    }
}


module.exports = connectDb ;