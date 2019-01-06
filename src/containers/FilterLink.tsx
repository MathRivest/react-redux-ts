import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/visibilityFilter';
import Link from '../components/Link';
import { AppState } from '../reducers';

const mapStateToProps = (state: AppState, ownProps: any) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
