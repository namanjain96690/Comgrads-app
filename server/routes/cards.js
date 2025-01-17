import express from "express";
import mongoose from "mongoose";
import Cards from "../models/dbCards.js";

const router = express.Router();

router.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});
router.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

export default router;
