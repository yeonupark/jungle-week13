import { fetchTodos, createTodo } from "../../api/todoApi";
import { addTodo } from "./viewer";

// Action Value
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const EDIT_TODO = "EDIT_TODO";

export const addTodoAction = (todo) => async(dispatch) => {

    try {
        const newTodo = await createTodo(todo);
        dispatch(addTodo(newTodo));
    } catch (error) {
        console.log('Error adding todo: ', error);
    }
};