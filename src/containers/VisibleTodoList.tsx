import { connect } from 'react-redux';
import { toggleTodo, Todo } from '../actions/todos';
import { VisibilityFilters } from '../actions/visibilityFilter';
import TodoList from '../components/TodoList';
import { AppState } from '../reducers';

const getVisibleTodos = (todos: Todo[], filter: string | undefined) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter((t: Todo) => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter((t: Todo) => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = (state: AppState) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch: any) => ({
    toggleTodo: (id: string): void => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
