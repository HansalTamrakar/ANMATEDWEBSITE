const Todo = require("../Models/todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete({_id:id});
    res.status(200).send({
      success:true,
      message: "The TODO IS DELETED SUCCESFULLY",
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
exports.deleteAllTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.deleteMany();
    res.status(200).send({
      success:true,
      message: "The TODO IS DELETED SUCCESFULLY",
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