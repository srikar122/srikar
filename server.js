const exp=require("express")
const app=exp()
const mclient=require("mongodb").MongoClient
const path=require("path")
let msg =require("./API/msg.js")

require ("dotenv").config()
//dealing with page reference we use path and below code
app.use(exp.static(path.join(__dirname,'./build')))

let DBurl=process.env.DBurl
mclient.connect(DBurl)
.then((client)=>{
    let dbObj=client.db("srikar")
    let messages=dbObj.collection("messages")
    app.set("messages",messages)
    console.log("success")
})
.catch((err)=>{
    console.log("error in DB connection ",err)
})

app.use('/data',msg)

app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})

app.use((request,response,next)=>{
    response.send({message:`path  ${request.url} is invalid`})
})

app.use((error,request,response,next)=>{
    response.send({mesage:error.message})
})

app.listen(process.env.PORT,()=>{
    console.log("server listening on port number 3000")
})
