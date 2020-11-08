import logo from './logo.svg';
import Spinner from './components/Spinner/Spinner'
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import WithReduxState from './redux/Reducer';
import { Provider, connect } from 'react-redux';
import { handleChange, callApi } from './redux/Actions'



export const store = createStore(WithReduxState, applyMiddleware(thunk));
function myApp(props) {
  return <div className="App">
    <Spinner {...props.state}/>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={() => props.callApi()}>
            This button call an endpoint and turn on the spinner
        </button>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>;
}

const mapStateToProps = (state) => ({
  // value: state.withReduxState.valueToShowInReadComponent,
  // valueToShowInReadComponent: state.withReduxState.valueToShowInReadComponent
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value) => {
      dispatch(handleChange(value))
  },
  callApi: () => {
      dispatch(callApi())
  }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(myApp);

function App() {
  return (
    <Provider store={store}>
    <Container/>
    </Provider>
  );
}



export default App;

