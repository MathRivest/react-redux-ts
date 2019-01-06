import React from 'react';
import Todo from './Todo';

type Todo = {
    id: string;
    completed: boolean;
    text: string;
};

interface ITodoListProps {
    todos: Todo[];
    toggleTodo: any;
}

const TodoList = ({ todos, toggleTodo }: ITodoListProps) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
);

export default TodoList;
