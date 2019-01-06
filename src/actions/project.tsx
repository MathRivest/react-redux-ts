import { ActionTypes } from '.';
import { makeActionCreator } from './actionCreator';

import uuid from 'uuid';

type newProjectPayload = {
    id: string;
    name: string;
    children: [];
    isActive: boolean;
};

export const newProject = (name: string) =>
    makeActionCreator<newProjectPayload, ActionTypes.NEW_PROJECT>(
        ActionTypes.NEW_PROJECT
    )({
        id: uuid(),
        name,
        children: [],
        isActive: false
    });

export type ProjectActions = ReturnType<typeof newProject>;
