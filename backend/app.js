const express = require('express');
const bodyParser = require('body-parser');

const { getStoredData, storeData } = require('./data/karten');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/karten', async (req, res) => {
  const storedData = await getStoredData();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2500));
  
  res.json({ karten: storedData });
});

app.get('/karten/:id', async (req, res) => {
  const storedData = await getStoredData();
  const karte = storedData.find((karte) => karte.id === req.params.id);
//   geht hier nur mit react router - params
  res.json({ karte });
});

app.post('/karten', async (req, res) => {
  const existingData = await getStoredData();
  const kartenData = req.body;
  const newKarte = {
    ...kartenData,
    id: Math.random().toString(),
  };
  const updatedData = [newKarte, ...existingData];
  await storeData(updatedData);
  res.status(201).json({ message: 'Neue Daten', post: newKarte });
});

app.listen(8080);