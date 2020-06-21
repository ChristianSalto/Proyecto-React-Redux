import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import { connectRouter } from 'connected-react-router';


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ...reducers
});

//const reducer = combineReducers(reducers);
const composedEnhancers = composeWithDevTools;

const configureMiddleware = config => {
    const middlewares = [ReduxThunk.withExtraArgument(config), ReduxLogger];
    return middlewares;
}


export function configureStore(config) {
    return function (preloadedState) {
       // console.log(preloadedState)
        const reducer = createRootReducer(config.history)
        const middlewares = configureMiddleware(config);
        const store = createStore(
            reducer,
            preloadedState,
            composedEnhancers(applyMiddleware(...middlewares))
        );
        return store;
    };
}