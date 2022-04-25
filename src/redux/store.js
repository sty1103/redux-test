import { applyMiddleware, createStore } from 'redux';
import todoApp from './reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import history from '../history';

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(
    thunk.withExtraArgument({ history }),
    promise
  ))
);

export default store;