import mongoose from "mongoose";
import express from "express";
import bookRouter from "./routes/bookRoutes.js";
import dotenv from 'dotenv'


const app = express();

dotenv.config()

app.use(express.json());
// app.use(cors());



app.use("/api/book", bookRouter);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.lkwbno6.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('Database Connected')
    app.listen(3000, () => console.log('Server Connected'))
}).catch((error) => console.log('THERE IS AN ERROR' + error))
