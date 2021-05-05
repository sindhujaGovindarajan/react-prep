import React from "react";
// import "./App.css";
import styled from 'styled-components';
import TodoList from "./components/TodoList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const appStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Container = styled.div`
  width: 250px;
  margin: 10px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px
`;

const App = () => (
  <Container>
    <Provider store={appStore}>
      <TodoList />
    </Provider>
  </Container>
);

export default App;