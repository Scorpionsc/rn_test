import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './screens/app/components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './store/rootReducer';
import rootSaga from './sagas';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
