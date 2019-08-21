import db from '../db/db'

class TodosController {
  getAllTodos(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: db,
    });
}
}
const TodoController = new TodosController();

export default TodoController;