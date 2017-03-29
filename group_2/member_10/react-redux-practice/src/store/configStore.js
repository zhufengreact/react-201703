import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gopherReducer from '../reducers/gopherReducer';

export default function configureStore(initialState) {
    const store = createStore(
        gopherReducer,
        initialState,
        applyMiddleware(thunk)
    );

    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('../reducers', () => {
    //         const nextRootReducer = require('../reducers').default;
    //         store.replaceReducer(nextRootReducer);
    //     });
    // }

    return store;
}