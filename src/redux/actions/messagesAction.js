import { GET_MESSAGES } from '../actionTypes'
import { SAVE_NEW_MESSAGES } from '../actionTypes'

// Devuelve los mensajes
export function getMessages() {
    
    return dispatch => {
        window.firebase.database().ref('messages/').on('value', snap => {

            dispatch({
                type: GET_MESSAGES,
                payload: snap.val()
            })           
        });
    }
}

// Almacena un nuevo mensaje
export function saveNewMessage(newMessage) {
    return dispatch => {
        window.firebase.database().ref(`messages/${newMessage.id}`).set(newMessage);

        dispatch({
            type: SAVE_NEW_MESSAGES,
            payload: this.props
        })  
    }
}
