import express, { Request, Response } from "express";
import cors from "cors";
import path from "path"
import bodyParser from "body-parser"

import authRouter from "./routes/auth";

const PORT = process.env.PORT || 5000;

class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

const app = new App().application;

// app.use(express.static("build")); 실제 서버 올라갔을 때에는 build된 내용 줘야 함
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// FrontEnd deploy server
app.get('/',(req, res)=>{
  res.send("server running")
})

// API server
app.use('/auth', authRouter);


app.listen(PORT, () => console.log("server running..."));
