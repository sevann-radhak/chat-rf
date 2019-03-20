import { createStore, combineReducers } from 'redux';

// Importar reducer
import componentDidMount from './reducers/componentDidMount';
import updateMessage from './reducers/updateMessage';
import handleSubmit from './reducers/handleSubmit';

const reducer = combineReducers({
    componentDidMount,
    updateMessage,
    handleSubmit,
});

const store = createStore(reducer);

export default store;