import express from "express";


const PORT = 8080;

const app = express(); 

app.use(express.json());


app.listen(PORT, ()=>{
    console.log(`App is listening at PORT -${PORT}`)
})