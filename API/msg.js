const exp=require("express")

const msg=exp.Router()
const expressAsyncHandler=require("express-async-handler")
//const { MessageFormSocial } = require("react-chat-engine")

msg.use(exp.json())

msg.post('/submit',expressAsyncHandler(async(request,response)=>{
    let data=request.body;
    let messages=request.app.get("messages");
    console.log(data)
    await messages.insertOne(data,()=>{
        response.send({message:"thank you sharing your thoughts"})
    });
    
}))
module.exports=msg