import express from 'express'
import morgan from "morgan";
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRouter from './routes/user-route.js';
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000",
  methods:['GET','POST'],
  credentials:true,
}))

const DB=process.env.MONGO_DB_URL.replace('<password>',process.env.MONGO_PASSWORD);

mongoose.connect(DB).then(()=>{
    console.log('Database is connected✌️');
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


app.use('/api/v1',userRouter);

const port = process.env.PORT || 7500;
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}🎉`);
});
