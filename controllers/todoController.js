var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://test:test@ds137530.mlab.com:37530/tod0jjadeseravla');

//create a schema - like  a blue print for our data
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item: 'buy healthy food'}).save(function(err) {
  if (err) throw err;
  console.log('item.saved');
});

var data = [{item: 'buy an xmas present'}, {item: 'let Olly out'}, {item: 'go to sleep early'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
  app.get('/todo', function(req, res) {
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(req, res) {
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item', function(req, res) {
    data = data.filter(functon(todo) {
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });
};
