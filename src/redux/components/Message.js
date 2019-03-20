import React from 'react'
import PropTypes from 'prop-types'

const Message = ({message}) => (
	<p> 
		<i>{message.author}</i>: {message.text}
	</p>
	)

Message.PropTypes = {
	text: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
}

export default Message