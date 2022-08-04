import mongoose from "mongoose";
import express from "express";
import bookRouter from "./routes/bookRoutes.js";


const app = express();

app.use(express.json());
// app.use(cors());



app.use("/api/book", bookRouter);

mongoose.connect("mongodb+srv://nivinclinton:Vinvin2025@cluster0.lkwbno6.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log('Database Connected')
    app.listen(3000, () => {
        console.log('Server Connected');
    })
}).catch((error) => console.log('THERE IS AN ERROR' + error))
