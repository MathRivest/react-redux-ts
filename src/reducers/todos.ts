import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { TodosActions } from '../actions/todos';

type Todo = { id: string; text: string; completed: boolean };
type TodosState = Todo[];

const defaultTodosState: TodosState = [];

const todosReducer: Reducer<TodosState, TodosActions> = (
    state = defaultTodosState,
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ];
        case ActionTypes.TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
};

export default todosReducer;
