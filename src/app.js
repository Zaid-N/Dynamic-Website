const express=require('express');
const path=require('path');

const hbs=require('hbs');


require("./db/conn");
const User=require('./models/usermessage');
const app=express();
const PORT=process.env.PORT||3030;

//static use of application
//setting thwe path 
//middleware

const staticPath=path.join(__dirname,"../public");
const templatesPath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");


app.use('/css',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')));
app.use('/jq',express.static(path.join(__dirname,'../node_modules/jquery/dist')));

app.use(express.urlencoded({extended:false}));
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",templatesPath);
hbs.registerPartials(partialPath);

app.get('/',(req,res)=>{
    res.render('index');
    // res.end();
})



app.post('/contact',async(req,res)=>{
    try{
        // res.send(req.body);
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }
    catch(error)
    {
        res.status(500).send(error);
    }
})
app.listen(PORT,()=>{
    console.log('server is running at 3030');
});