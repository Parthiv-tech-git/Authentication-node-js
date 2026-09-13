const ap = require("express")
const a = require("cors")
const mt = require("mysql2")
const g =ap()
g.use(a())
g.use(ap.json())

const my =mt.createConnection({
    host:'localhost',
    password:'Parthiv56',
    user:'root',
    database:'authenti'
})
my.connect(()=>{
    console.log("database is coonect ")
})

g.listen(3000,()=>{
    console.log("sever is running")

})