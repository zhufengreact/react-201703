import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import middleware from '../middleware';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, middleware)
  );
}
