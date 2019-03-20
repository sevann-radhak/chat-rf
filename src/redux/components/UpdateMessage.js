import React from 'react'
import PropTypes from 'prop-types'

const UpdateMessage = (props) => {
	const { messages } = this.state;
        const messagesList = messages.map(message => {

            return (

                <table className="table table-striped" name="tabla">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td key={message.id}>
                                <span style={{ float: "left", marginRight: 10 }}><font color="blue">{message.usuario + ": "}</font></span>
                                <span style={{ float: "left" }}>{message.text}</span>
                                <span style={{ float: "right", fontSize: 10 }}><font color="gray">{message.date}</font></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
        })

        return (
            <div>
                <div className="table-scroll">
                    <ul>{messagesList}</ul>
                </div>

                <form onSubmit={this.handleSubmit.bind(this)}>

                    <input type="text"
                        className="form-control mt-4"
                        name="nombre de usuario"
                        onChange={this.changeUser.bind(this)}
                        placeholder="Ingrese su nombre de usuario" />

                    <textarea type="text"
                        className="form-control mt-4"
                        value={this.state.message}
                        onChange={this.updateMessage.bind(this)}>
                    </textarea>

                    <button className="form-control btn btn-success mt-2"> Enviar </button>
                </form>
            </div>
        )
}

UpdateMessage.PropTypes = {
	dispatch: PropTypes.func.isRequired
}

export default UpdateMessage