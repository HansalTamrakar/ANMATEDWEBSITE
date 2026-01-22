
const Todo = require("../Models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { name, percentage, hobby } = req.body;
    const todo = await Todo.create({ name, percentage, hobby });
    res.status(200).send({
      success:true,
      message: "The TODO IS CREATED SUCCESFULLY",
      data: todo,
    });
  } catch (error) {
    res.status(500).send({
      success:false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};
