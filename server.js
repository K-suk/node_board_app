const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT =3000
const Thread = require("./models/Thread");

app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    "mongodb+srv://KosKos:m3B3VELyi8ugA09T@cluster0.o7nvdtn.mongodb.net/threads?retryWrites=true&w=majority"
)
.then(()=>console.log("db connected"))
.catch((err) => console.log(err));

app.get("/api/v1/threads", async(req, res)=>{
    try {
        const allThreads = await Thread.find({});
        res.status(200).json(allThreads);
    } catch(err){
        console.log(err);
    }
});

app.post("/api/v1/thread", async(req, res)=>{
    try {
        const createThread = await Thread.create(req.body);
        res.status(200).json(createThread);
    } catch(err){
        console.log(err);
    }
});

app.listen(PORT, console.log("server is running"));