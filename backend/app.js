import mongoose from "mongoose";
import express from "express";
import bookRouter from "./routes/bookRoutes.js";


const app = express();

app.use(express.json());
// app.use(cors());



app.use("/api/book", bookRouter);
// app.use('/', bookRouter)

mongoose.connect("mongodb+srv://nivinclinton:Vinvin2025@cluster0.lkwbno6.mongodb.net/?retryWrites=true&w=majority").then(()=>app.listen(8000))
.then(()=>console.log("database connected")).catch((err)=>console.log(err))