import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;