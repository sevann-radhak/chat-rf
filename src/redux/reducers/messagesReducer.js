import { GET_MESSAGES } from '../actionTypes'

export default function (state = {}, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return action.payload;

        default:
            return state;
    }
}