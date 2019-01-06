import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { ProjectActions } from '../actions/project';

type ProjectState = {
    name: string | null,
    id: string | null,
    children: any[],
    isActive: boolean,
}

const defaultProjectState = {
    name: null,
    id: null,
    children: [],
    isActive: false
}

export const projectReducer: Reducer<ProjectState, ProjectActions> = (state = defaultProjectState, action) => {
    switch (action.type) {
        case ActionTypes.NEW_PROJECT:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default projectReducer;