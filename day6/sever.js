const app = require('./src/app')
const mongoose = require('mongoose')

function connectToDb(){
   mongoose.connect("mongodb://puneetgautam739_db_user:tgA0hExdgiSE4yX4@cluster0-shard-00-00.smg0jtx.mongodb.net:27017,cluster0-shard-00-01.smg0jtx.mongodb.net:27017,cluster0-shard-00-02.smg0jtx.mongodb.net:27017/day-6?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin")
    .then(()=>{
        console.log("connected to DB")
    })
    .catch((err)=>{
        console.log("DB ERROR:", err)   // 👈 ye add karo
    })
}
connectToDb()

app.listen(3000, ()=>{
    console.log("server running on the port of 3000")
})




// puneet   1is4XjkVlSCISs63