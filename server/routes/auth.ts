import express, { Router } from "express";
import db from 

const authRouter = Router();

authRouter.post("/signin", (req, res) => {

  res.send("Auth");
});

authRouter.post("/signin", (req, res) => {
    res.send("Auth");
  });  

export default authRouter;
