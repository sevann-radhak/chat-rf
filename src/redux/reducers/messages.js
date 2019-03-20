// import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {
	switch (action.type) {
		case 'UpdateMessage':
			return state.concat([
				{
					message: action.message
				}
				])
		default:
			return state
	}
}

export default messages