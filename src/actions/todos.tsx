import { makeActionCreator } from './actionCreator';
import { ActionTypes } from '.';
import uuid from 'uuid';

type addTodoPayload = {
    id: string;
    text: string;
};

export const addTodo = (text: string) =>
    makeActionCreator<addTodoPayload, ActionTypes.ADD_TODO>(
        ActionTypes.ADD_TODO
    )({ id: uuid(), text });

type toggleTodoPayload = {
    id: string;
};
export const toggleTodo = (id: string) =>
    makeActionCreator<toggleTodoPayload, ActionTypes.TOGGLE_TODO>(
        ActionTypes.TOGGLE_TODO
    )({
        id
    });

export type TodosActions =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>;
