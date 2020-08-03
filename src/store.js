import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers'; //Como el archivo se llama index.js no necesitamos especificarlo

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),

        typeof window === 'object' && 
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;
