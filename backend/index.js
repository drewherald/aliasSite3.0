require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const billingRoutes = require("./routes/billing");
const uploadRoutes = require('./routes/upload');
const userRoutes = require("./routes/user");
const addonRoutes = require("./routes/addons");

const app = express();

const cors = require("cors");

//middleware


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

app.use("/api/upload/", uploadRoutes);

app.use("/api/user", userRoutes);

app.use("/api/addons", addonRoutes);



mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT || 3000, () => {
      console.log("connected to db & listening on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });


