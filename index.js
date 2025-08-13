const express= require('express');

const app=express();

const PORT=8081;

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Home Page :-)"
    })
}); 

// app.all('*',(req,res)=>{
//     res.status(404).json({
//         message:"Working on it, Please try again later!"
//     });
// });

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})