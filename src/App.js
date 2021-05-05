import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const appStore = createStore(rootReducer);

const App = () => (
  <Provider store={appStore}>
    <div className="app">
      <TodoList />
    </div>
  </Provider>
);

export default App;