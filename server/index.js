const express = require('express');
const cors = require('cors');
const app = express();
const controller = require('./controller/controller.js'
)
app.use(express.json());
app.use(cors());
app.post('/register', controller.register);

app.post('/login', controller.login);

app.post('/saveGroup', controller.saveGroup);


app.listen(3000, function (err){
  if(err) console.log(err);
  console.log("listening on 3000");
})