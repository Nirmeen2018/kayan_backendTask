import express from 'express';
import userRouter from './Router.js';
import cors from "cors"
const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.listen(3300,()=>{
    console.log("server is running .. ");
}) 