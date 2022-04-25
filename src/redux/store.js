import { applyMiddleware, createStore } from 'redux';
import todoApp from './reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import history from '../history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './actions/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(
    sagaMiddleware
  ))
);

sagaMiddleware.run(rootSaga);

export default store;