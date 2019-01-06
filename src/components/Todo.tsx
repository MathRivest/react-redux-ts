import React from 'react';

interface ITodoProps {
    onClick: any;
    completed: boolean;
    text: string;
}

const Todo = ({ onClick, completed, text }: ITodoProps) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
);

export default Todo;
