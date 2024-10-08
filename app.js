import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js"

dotenv.config();

//Connection to DB
conn();

const app = express();

const port = process.env.PORT;

//ejs template engine
app.set('view engine','ejs')

//static files middleware
app.use(express.static('public'))

//route
app.use("/", pageRoute);


app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/about',(req,res)=>{
    res.render("about");
})

app.listen(port,()=>{
    console.log(`Project started on ${port}`);
});