const todosModel = require("../models/todo.models");

async function getIndex(req, res) {
    try {
        const todos = await todosModel.find({}).limit(5).sort([ ['toDoTitle','asc'] ]);
        return res.render('index', { pageTitle: "Todo | Home", todos: todos });
    }
    catch (e) {
        console.log(e.message);
    }
}

async function addToDo(req, res) {
    let title = req.body.todotitle;
    let desc = req.body.tododesc;
    try {
        let toBeSaved = new todosModel({
            toDoTitle: title,
            toDoDesc: desc
        });
        await toBeSaved.save();
    }
    catch (e) {
        console.log(e);
    }

    return res.redirect('/');
}

async function deleteToDo(req , res) {
    let id = req.query.id;
    try {
        await todosModel.deleteOne({_id: id})
        return res.redirect("/");
    }
    catch(e){
        console.log(e.message);
    }
}

async function allToDos(req, res) {
    try {
        const todos = await todosModel.find({}).limit(5).sort([ ['toDoTitle','asc'] ]);
        return res.render('pages/todolist', { pageTitle: "Todo | Lists", todos: todos });
    }
    catch (e) {
        console.log(e.message);
    }
}


async function viewToDo(req, res  ) {
    let id = req.query.id;
    try {
        const toDo = await todosModel.findById(id);
        return  res.render('pages/singletodo', { pageTitle: "Todo | Item", todo: toDo });
    }
    catch(err) {
        console.log(e.message);
    }
}


async function getUpdatePage(req, res) {
    let id = req.query.id;
    try {
        const toDos = await todosModel.find({});
        const toDo = await todosModel.findById(id);
        return  res.render('pages/updatetodo', { pageTitle: "Todo | Update", todos: toDos , todo: toDo  }); 
    }
    catch(err) {
        console.log(e.message);
    }
}


async function updateTodo(req, res) {
    let id = req.query.id;
    let title = req.body.todotitle;
    let desc = req.body.tododesc;
    try {
        await todosModel.findByIdAndUpdate(id,{
            toDoTitle: title,
            toDoDesc: desc
        });

        return res.redirect('/lists');
    }
    catch(e) {
        console.log(e.message);
    }
}

module.exports = {
    addToDo,
    allToDos,
    getIndex,
    deleteToDo,
    viewToDo,
    getUpdatePage,
    updateTodo
}