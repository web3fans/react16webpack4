// import {createStore, compose} from 'redux';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {routerReducer} from 'react-router-redux';
import createPromiseMiddleware from 'redux-promise-middleware';
// import { reducer as todoReducer } from './routes/Todo/todos';
// import { reducer as filterReducer } from './routes/Todo/filter';
// import { reducer as chartReducer } from './routes/Chart/index';

// const reducer = combineReducers({
//   // routing: routerReducer,//react-router-redux
//   // todos: todoReducer,
//   // filter: filterReducer,
//   // chart: chartReducer,
// });
const reducer = f => f;
const middlewares = [createPromiseMiddleware];

const win = window;
const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : f => f
);

const initialState = {};
export default createStore(reducer, initialState, storeEnhancers);

