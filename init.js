const mongoose = require("mongoose");
const Chat = require("./models/chat.js");




main()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        msg: "teach me JS callbacks",      
        created_at: new Date(),
    },
    {
        from: "ankit",
        to: "ankita",
         msg: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "Tony",
        to: "peter",
        msg: "teach me JS callbacks",
        created_at: new Date(),
    },
]

Chat.insertMany(allChats);
  
 