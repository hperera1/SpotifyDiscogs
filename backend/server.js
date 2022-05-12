const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

let Todo = require('./schemas/todo');
const todoRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todoRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("connected to mongodb server");
});

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(error, todos) {
        if(error) {
            console.log(error);
        }
        else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(error, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('todo adding failed');
        });
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if(!todo) {
            res.status(404).send('data not found');
        }
        else {
            todo.description = req.body.description;
            todo.responsible = req.body.responsible;
            todo.priority = req.body.priority;
            todo.completed = req.body.completed;

            todo.save().then(todo => {
                res.json('todo updated');
            })
            .catch(err => {
                res.status(400).send('update not possible');
            })
        }
    });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});