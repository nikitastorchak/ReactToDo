const Task = require('../../db/models/list/list')

module.exports.add = (req, res) => {
  const body = req.body
  const {name, isChecked} = body
  res.set('Access-Control-Allow-Origin', '*');
  const task = new Task({
    name,
    isChecked
  });
  task.save().then(result => {
    res.send(result);
  });
};

module.exports.show = (req, res) => {
  Task.find().then((result) => {
    res.send(result);
  }).catch((err) => {
    res.send(err);
  });
};

module.exports.update = (req, res) => {
  const body = req.body
  res.set('Access-Control-Allow-Origin', '*');
    Task.updateOne({_id: body._id}, {
      $set: {
        name: body.name,
        isChecked: isChecked
      },
    }).then(result => {
      Task.find().then((result) => {
        res.send(result);
      });  
    });
};

module.exports.del = (req, res) => {
  const id = req.query._id;
  if (id) {
    Places.deleteOne({ _id: id }).then((result) => {     
      res.send(result);
    }).catch((err) => {
        res.send(err);
    });
  }
};