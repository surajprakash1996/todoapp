const express   = require("express");
const router    = express.Router();
const { addToDo , allToDos , getIndex, deleteToDo, viewToDo, getUpdatePage, updateTodo} = require("../controllers/todo.controllers");

router.get("/", getIndex);
router.get("/lists", allToDos);
router.post("/addtodo", addToDo);
router.get("/delete:id?", deleteToDo);
router.get("/view:id?", viewToDo );
router.get("/update:id?", getUpdatePage );
router.post('/updatetodo:id?', updateTodo)



module.exports=router;