import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import project from './project';

const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    project
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;