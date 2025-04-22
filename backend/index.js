require('dotenv').config();
const express = require('express');
const billingRoutes = require("./routes/billing");

const app = express();

const cors = require("cors");

app.use(cors({ origin: true, credentials: true }));

app.use((req, res, next) => {
  next();
});


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

//routes
app.use("/api/billing/", billingRoutes);


app.listen('3000', () => console.log('server running on port 3000'));

