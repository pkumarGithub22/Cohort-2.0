// server ko start karna 
//  databs se connect karna

// const { default: mongoose } = require('mongoose')
const app = require('./src/app')
const  mongoose  = require("mongoose") 

function connectToDb(){
    mongoose.connect("mongodb+srv://puneet:1is4XjkVlSCISs63@cluster0.smg0jtx.mongodb.net/day-7")
    .then(()=>{
        console.log("Conneted to DB")
    })
}
connectToDb();



app.listen(3000, ()=>{
    console.log(" Sever is running on the port of 3000")
})