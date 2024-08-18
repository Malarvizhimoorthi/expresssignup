const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const port=4000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
});
app.post('/submit',(req,res)=>
{
    const data=req.body;
    console.log(data);
    res.send("<h2 style='font-size:30px;color:darkred;margin:auto;text-align:center;padding:50px;margin-top:180px;background-color:lightblue;max-width:300px;border-radius:50px;border:5px solid darkgreen;'>Registered Successfully &#10004<br/>Now You Can login<br/><button style='font-size:20px;padding:15px;margin-top:40px;border-radius:20px;'>login</button></h2>")
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});