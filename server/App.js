const express = require("express");
const cors = require("cors");
require("./src/db/conn")
const userRoutes = require('./src/routes/userRoutes')
const app = express();
const corsOptions = {
    origin: process.env.ORIGIN
  };

  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });
  app.use(cors(corsOptions));
  
  app.use(express.json());
  const PORT = process.env.PORT || 5000;

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to node application." });
  });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

  app.use('/api',userRoutes);