const express = require ('express')
const Datee = require("./middleware/Date")
//instance d'express
const app = express()

app.use(express.static(__dirname+"/public"))
app.use(Datee)
//route1
app.get("/home",(req,res) =>{
    res.sendFile(__dirname+"/public/home.html")
})

//route2

app.get("/about",(req,res) =>{
    res.sendFile(__dirname+"/public/about.html")

})

//route3
app.get("/services",(req,res) =>{
    res.sendFile(__dirname+"/public/services.html")
})
//toute autre route
app.get("*",(req,res) =>{
    res.send("Ressource Not Found")

})
app.get("/CSS/styles.css",(req,res) =>{
    res.sendFile(__dirname+"/public/CSS/styles.css")
})
const port =5000
app.listen(port,err => {
    err?console.log(err) : console.log(`server is running on port ${port}`)
})