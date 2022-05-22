import express from 'express';
import config from 'config';
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan';
const app=express();
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
const connectDb=async ()=>{
    try {
       await mongoose.connect(config.get('mongoURI'));
        console.log('mongodb connected')
    } catch (error) {
        console.log(error)
    }
}
connectDb()
import todosRoutes from './routes/route.js'
app.use('/todos',todosRoutes)

const PORT=config.get("PORT") || 4000;

app.listen(PORT,()=>console.log(`server running on ${PORT}`))