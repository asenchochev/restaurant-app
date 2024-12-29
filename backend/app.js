import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errormiddleware } from './error/error.js';
import ReservationRouter from './routes/reservationRoute.js'



const app = express();
dotenv.config({path: "./config/config.env"})

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
})
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("api/v1/reservation", ReservationRouter)

dbConnection();

app.use(errormiddleware)
a
export default app;