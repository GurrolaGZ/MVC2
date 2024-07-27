import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dontenv from "dotenv";
import { test } from "./backend/controllers/user.controller.js";
dontenv.config();


mongoose.connect(process.env.url_bd)
.then(() => {
    console.log('jalo')
})
.catch((err) => {
    console.log('no jalo', err)
})

const app=express();
app.use(cors())

app.listen(4000, () => {
    console.log('Esta funcionando correctamente tu servidor local')
})


test()
