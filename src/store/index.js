import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';


const createCombine = () => combineReducers({ ...reducers });

const composedEnhancers = composeWithDevTools;

const configureMiddleware = () => {
    const middlewares = [ReduxThunk, ReduxLogger];
    return middlewares;
};

export function configureStore() {
    return function (preloadedState) {
        const reducers = createCombine()
        const middleware = configureMiddleware();
        const store = createStore(
            reducers,
            preloadedState,
            composedEnhancers(applyMiddleware(...middleware)),
        );
        return store;
    }
}
