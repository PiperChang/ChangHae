import express, { Router } from "express";

const authRouter = Router();

authRouter.post("/signin", (req, res) => {
  res.send("Auth");
});

authRouter.post("/signin", (req, res) => {
    res.send("Auth");
  });  

export default authRouter;
