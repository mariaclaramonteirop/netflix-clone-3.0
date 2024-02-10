const express = require("express")
const path = require("path")
const port = 3333

let initialpath = path.join(__dirname, "public")

let app = express()
app.use(express.static(initialpath))

app.get("/", (req,res)=>{
    res.sendFile(path.join(initialpath, "index.html"))
})

app.listen(port, ()=>{
    console.log(`server start up on port ${port}!`)
})