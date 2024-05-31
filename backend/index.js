const express = require("express");
const app = express();
const { newTodo } = require("./db");
const { createTodo, updateTodo } = require("./types");

app.use(express.json());

//new_todo-
//body{
//     title : string,
//     description : string
// }
app.post("/todo", async (req, res) => {
  const createPayLoad = req.body;
  let check = createTodo.safeParse(createPayLoad).success;

  if (!check) {
    res.status(411).json({
      msg: "invalid inputs",
    });
  }

  await newTodo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });
  res.json({
    msg: "New Todo created successfully",
  });
});

//get a list of todos
app.get("/todos", async (req, res) => {
  const todoList = await newTodo.find({});
  res.json({
    todoList,
  });
});

//mark a todo as completed
app.put("/completed", async (req, res) => {
  const markPayLoad = req.body;
  let putcheck = updateTodo.safeParse(markPayLoad).success;
  if (!putcheck) {
    res.status(411).json({
      msg: "Invalid Id",
    });
  }
  await newTodo.updateOne(
    {
      _id: markPayLoad.id,
    },
    { completed: true }
  );
  res.json({
    msg: "Marked as Compeleted!",
  });
});

app.listen(3000);
