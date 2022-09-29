const db = require('../../database/index.js');

exports.register = (req, res) => {
  db.register(req.body)
  .then(() => {
    res.status(201);
    req.body.groups=[];
    req.body.results=[];
    res.send(req.body);
  })
  .catch((err) => {
    res.status(500);
    res.send(err);
  })
};

exports.login = (req, res) => {
  db.login(req.body)
  .then((response) => {
    if(response){
      res.status(200);
      res.send(response);
    }else{
      throw("No Match");
    }
  })
  .catch((err) => {
    res.status(500);
    res.send(err);
  })
};

exports.saveGroup = (req, res) => {
  db.saveGroup(req.body)
  .then((response) => {
    res.status(201);
    res.send('');
  })
  .catch((err) => {
    res.status(500);
    res.send(err);
  })
};
