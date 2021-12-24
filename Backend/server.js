const app = require("./app");
const PORT = 9001;
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Ritz:Ritesh111@cluster0.zxig8.mongodb.net/second?retryWrites=true&w=majority").then(data=>{
    console.log("connected to db ");
    app.listen(PORT,()=>{
        console.log(`server running ${PORT}`);
    })
}).catch(err=>{
    console.log(err);
})
