import { makeActionCreator } from './actionCreator';
import { ActionTypes } from '.';

type setVisibilityFilterPayload = string;

export const setVisibilityFilter = (filter: string) =>
    makeActionCreator<
        setVisibilityFilterPayload,
        ActionTypes.SET_VISIBILITY_FILTER
    >(ActionTypes.SET_VISIBILITY_FILTER)(
        filter);

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export type VisibilityFilterActions = ReturnType<typeof setVisibilityFilter>;
