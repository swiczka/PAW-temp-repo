'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {

  const radius = req.params.r;
  const area = 3.14*radius**2;
  const circumference = 6.28*radius;

  const result = {
    area: area,
    circumference: circumference
  }
  res.json(result);
});


app.get('/math/rectangle/:width/:height', (req, res) => {

  const width = req.params.width;
  const height = req.params.height;
  const area = width*height;
  const perimeter = 2*width + 2*height;

  const result = {
    area: area,
    perimeter: perimeter
  }
  res.json(result);
});

app.get('/math/power/:base/:exponent', (req, res) => {

  const base = req.params.base;
  const exponent = req.params.exponent;
  const power = base**exponent;

  const result = {
    power: power
  }
  res.json(result);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});