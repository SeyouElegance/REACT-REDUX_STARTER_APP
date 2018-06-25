import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';

import App from './components/App';
import './assets/01-modules/main.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
<App />
</Provider>
, document.getElementById('app'));