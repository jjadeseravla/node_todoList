var data = [{item: 'buy an xmas present'}, {item: 'let Olly out'}, {item: 'go to sleep early'}];

module.exports = function(app) {
  app.get('/todo', function(req, res) {
    res.render('todo', {todos: data});
  });

  app.post('/todo', function(req, res) {

  });

  app.delete('/todo', function(req, res) {

  });
};
