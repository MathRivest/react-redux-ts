import React from 'react';
import TodoItem from './Todo';
import { Todo } from '../actions/todos';

interface ITodoListProps {
    todos: Todo[];
    toggleTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleTodo }: ITodoListProps) => (
    <ul>
        {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
);

export default TodoList;
