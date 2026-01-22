
const Todo = require("../Models/todo");

exports.updatedTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name,hobby,percentage } = req.body;
    const todo = await Todo.findByIdAndUpdate({_id:id},{
        name,hobby,percentage
    },
    {new:true,runValidators:true}
);
    res.status(200).send({
      success:true,
      message: "The TODO IS Updated SUCCESFULLY",
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