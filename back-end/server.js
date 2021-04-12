const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const querystring = require('querystring');
const app = express();
const router = express.Router();
app.use(cors());

// all of our routes will be prefixed with /api
app.use(bodyParser.json());
app.use(express.json())
app.use('/api',bodyParser.json(), router)   //[Use json]
app.use('/api',bodyParser.urlencoded({ extended: false}),router);

app.get("/line",(req,res)=>{
    res.json([{"token":"szpcYIknTL2SPEoq8nWsEu2Vr9BYOKmkpo8oTNQeSf5s"}])
})
app.post("/line",(req,res)=>{
    const massages = req.body.massage;
   console.log(massages)
   axios({
        method: 'post',
        url: 'https://notify-api.line.me/api/notify',
        headers: {
          'Authorization': 'Bearer ' + 'szpcYIknTL2SPEoq8nWsEu2Vr9BYOKmkpo8oTNQeSf5',  //line token
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
        },
        data: querystring.stringify({
          message: massages,
        })
      })
    .then( function(res) {
      console.log(res.data);
    })
    .catch( function(err) {
      console.error(err);
    });
    res.json([{"massage":"ok"}])
})
app.use("*", (req, res) => res.status(404).send('404 Not found'));
const PORT= process.env.PORT ||5000
app.listen(PORT, ()=>{console.log(`Server is runing ${PORT}`)})