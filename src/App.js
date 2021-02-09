import React from "react";
import AppRouter from "./AppRouter";
import Container from "./default module/containers/container.js";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import dataReducer from "./reduser/dataEnter";
import { rootSaga } from "./sagas/index";
import ReduxContainer from "./default module/containers/ReduxContainer";

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppRouter />
        <Container />
        <ReduxContainer />
      </div>
    </Provider>
  );
}

export default App;
