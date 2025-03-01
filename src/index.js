const express=require("express");
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverconfig');
const APIRoutes=require('./routes/index');
const {Airport,City,Airplane}=require('./models/index');
const db=require('./models/index');
const setupAndStartServer=async()=>{
    // create the express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',APIRoutes);
    app.listen(PORT,async ()=>{
        await Airplane.create({
            modelNumber:'Bombardier CRJ'
        })
    });
}
setupAndStartServer();

