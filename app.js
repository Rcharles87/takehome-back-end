const express = require("express");
const cors = require("cors");

const menuData = require("./foodData.json");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running" });
});

app.get("/items", (req, res) => {
  try {
    const { items } = menuData;
    res.status(200).json({ data: items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/items/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { items } = menuData;
    const item = items.find((el) => el.id === id);

    if (item) {
      return res.status(200).json({ data: item });
    }

    res.status(404).json({ error: `Could not items with id ${id}` });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = app;
