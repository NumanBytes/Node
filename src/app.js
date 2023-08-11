import express from "express";
import studentRouter from "./router/student.js";


const app = express(); // made an object of express

app.get('/', (req, res) => {
    return res.json({message: "Hello WOrld!"});    
});
app.use(studentRouter);

app.listen(3300, () => {
    console.log("Listening on 3300");
});

