const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/cookies', {
  useNewUrlParser: true
});


app.post('/api/items', async (req, res) => {
  console.log("In Post Route");
  const item = new Item({
    title: req.body.title,
    cookies: req.body.cookies,
    totalCookies: req.body.totalCookies,
    totalClicks: req.body.totalClicks,
    upgradesPurchase: req.body.upgradesPurchase,
    clickValue: req.body.clickValue
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.get('/api/items', async (req, res) => {
  console.log("In Get Route")
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  console.log("In delete request");
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => {
  try {
     const item = await Item.findOne({
      _id: req.params.id
    });
    item.totalCookies = req.body.totalCookies;
    await item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



const itemSchema = new mongoose.Schema({
  title: String,
  cookies: Number,
  totalCookies: Number,
  totalClicks: Number,
  upgradesPurchase: Number,
  clickValue: Number,
});


const Item = mongoose.model('Item', itemSchema);


app.listen(3000, () => console.log('Server listening on port 3000!'));
