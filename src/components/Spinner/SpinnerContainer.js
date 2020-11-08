import { connect } from 'react-redux';
import Spinner from './Spinner';
import { loadingOff, loadingOn } from '../../redux/Actions'


const mapStateToProps = (state) => ({
    loading: state.loading
    // loader: {loading: state.loader.loading}
})

const mapDispatchToProps = (dispatch) => ({
    loadingOn: () => {
        dispatch(loadingOn())
    },
    loadingOff: () => {
        dispatch(loadingOff())
    }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(Spinner);

export default Container


