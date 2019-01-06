import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { addTodo } from '../actions/todos';
import { newProject } from '../actions/project';

const AddTodo = ({ dispatch }: DispatchProp) => {
    let input: any;
    dispatch(newProject('mynew project :)'))
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
