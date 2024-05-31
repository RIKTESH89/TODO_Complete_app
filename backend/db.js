// Todo{
//     title:string,
//     description:string,
//     completed:boolean
// }

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://rikteshs20:Rik%403708@cluster0.qi4wq4o.mongodb.net/TODO_APP_NEW"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const newTodo = mongoose.model("newTodo", todoSchema);

module.exports = {
  newTodo,
};
