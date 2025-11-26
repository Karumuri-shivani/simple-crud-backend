// This is a feature update for the lab
const express= require("express");
const cors= require("cors");
const app= express();

app.use(cors());
app.use(express.json());

let item=[];

app.get("/item",(req,res)=>{
    res.json(item);
});

app.post("/item",(req,res)=>{
    const newItem= {id: Date.now(), name: req.body.name};
    item.push(newItem);
    res.status(200).json(newItem);
});

app.patch("/item",(req,res)=>{
    const item = item.find(i => i.id == req.params.id);
    if(item){
        item.name = req.body.name;
        res.json(item);
    }else{
        res.status(404).json({message: "Item not found"});
    }
});

app.delete("/item/:id",(req,res)=>{
    item=item.filter(i => i.id != req.params.id);
    res.json({message: "Item deleted"});
});

const PORT=5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`) );