import { ActionTypes } from '../actions';
import {
    VisibilityFilterActions,
    VisibilityFilters
} from '../actions/visibilityFilter';
import { Reducer } from 'react';

type VisibilityFiltersState = string | undefined;
const defaultVisibilityFiltersState = VisibilityFilters.SHOW_ALL;

const visibilityFilter: Reducer<
    VisibilityFiltersState,
    VisibilityFilterActions
> = (state = defaultVisibilityFiltersState, action) => {
    switch (action.type) {
        case ActionTypes.SET_VISIBILITY_FILTER:
            return action.payload;
        default:
            return state;
    }
};

export default visibilityFilter;
