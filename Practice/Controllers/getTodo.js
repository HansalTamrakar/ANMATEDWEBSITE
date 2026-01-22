
const Todo = require("../Models/todo");

exports.fetchTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById({_id:id});
    res.status(200).send({
      success:true,
      message: "The TODO IS Fetched SUCCESFULLY",
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

exports.fetchAllTodo = async (req, res) => {
  try {
    
    const todo = await Todo.find();
    res.status(200).send({
      success:true,
      message: "The TODO IS Fetched SUCCESFULLY",
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
