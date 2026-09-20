const exp =require("express")
const cor =require("cors")
const my= require("mysql2")
const re =exp()
re.use(cor())
re.use(exp.json())
const mysq= my.createConnection({
    host:'localhost',
    root:'root',
    password:'Parthiv56',
    database:'dashbord'
})
mysq.connect(()=>{
    console.log("datebase is connected")
})

re.listen('3000',()=>{
    console.log("sever is running")
})