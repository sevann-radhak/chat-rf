import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';


/////////////////////////////////////////////////////////
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers';

// Create redux store -> reducers -> 'actions -> actionType' | applyMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// Provide the store to react
/////////////////////////////////////////////////////////

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)