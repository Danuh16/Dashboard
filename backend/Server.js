import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";


const app = express();

dotenv.config();


app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


const corsOptions ={
    origin: '*',
    optionSuccessStatus:200
}

app.use(cors(corsOptions));


app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management",managementRoutes);
app.use("/sales", salesRoutes);


const dbOptions = {useNewUrlParser:true, useUnifiedTopology: true}
mongoose.set("strictQuery",true)
mongoose.connect(process.env.LOCAL_MONGO_DB, dbOptions)
.then(() => console.log('DB connected!'))
.catch(err => console.log(err))

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

