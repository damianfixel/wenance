import styled from 'styled-components'
import Spinner from './components/Spinner/Spinner'
import Search, {Button} from './components/Search/Search'
import People from './components/People/People'
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MyReduxState from './redux/Reducer';
import { Provider, connect } from 'react-redux';
import React, {useEffect, useState} from 'react'
import { deleteUser, getPeopleAction } from './redux/Actions';


export const Title = styled.div`
  margin-bottom: 20px;`

export const store = createStore(MyReduxState, applyMiddleware(thunk));
function MyApp(props) {
  const [filter, setFilter] = useState('')

  useEffect(() => {
    props.getPeople();
  }, []);

  return <div className="App">
    <Spinner {...props.state}/>
    <header className="App-header">
      <Title>Hi! im Wenance Challenge</Title>
      <Search onClick={(value) => setFilter(value)} />
      <People filter={filter} {...props.state.people}/>

      <Button onClick={() => props.getPeople()}>
            More results
      </Button>
      
    </header>
  </div>;
}

const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (value) => {
      dispatch(deleteUser(value))
  },
  getPeople: () => {
      dispatch(getPeopleAction())
  }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(MyApp);

function App() {
  return (
    <Provider store={store}>
    <Container/>
    </Provider>
  );
}



export default App;

