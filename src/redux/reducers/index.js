import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';

//import messages from './messages'
// import users from './users'

// const chat = combineReducers({
//     messages
//     // , users
// })

//export default chat


const rootReducer = combineReducers({
    messages: messagesReducer
})

export default rootReducer