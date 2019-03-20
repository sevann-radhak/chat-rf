import { connect } from 'react-redux'
import UpdateMessage from '../components/UpdateMessage'
import { UpdateMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message) => {
    dispatch(addMessage(message))
  }
})

export const UpdateMessage = connect(() => ({}), mapDispatchToProps)(UpdateMessage)