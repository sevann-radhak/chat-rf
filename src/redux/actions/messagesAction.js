import { GET_MESSAGES } from '../actionTypes'

// Devuelve los mensajes
export function getMessages() {
    console.log("hola");
    return dispatch => {
        window.firebase.database().ref('messages/').on('value', snap => {

            dispatch({
                type: GET_MESSAGES,
                payload: snap.val()
            })

            // dispatch({
            //     type: GET_MESSAGES,
            //     payload: currentMessages
            // })            
        });
    }
}

// Almacena un nuevo mensaje
export function saveNewMessage(newMessage) {
    return dispatch => window.firebase.database().ref(`messages/${newMessage.id}`).set(newMessage);
}
