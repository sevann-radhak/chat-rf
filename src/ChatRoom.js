import React, { Component } from "react";
import './ChatRoom.css';

/////////////////////////////////
import { connect } from 'react-redux'
import { getMessages, saveNewMessage } from './redux/actions/messagesAction';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            message: '',
            messages: []
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        var today = new Date(),
            date = today.getFullYear() + '/' +
                (today.getMonth() + 1) + '/' +
                today.getDate() + ' - ' +
                today.getHours() + ':' +
                today.getMinutes();

        const newMessage = {
            id: this.props.messages.length,
            usuario: this.state.usuario,
            text: this.state.message.trim(),
            date: date
        };

        if (newMessage.usuario.trim() === "") {
            alert("Para chatear debes ingresar un Nombre de usuario.");
        }
        else {
            if (newMessage.text.trim() === "") {
                alert("Para chatear debes ingresar un texto válido.");
            }
            else {
                //window.firebase.database().ref(`messages/${newMessage.id}`).set(newMessage);                
                this.props.saveNewMessage(newMessage);

                this.setState({ message: '' });
            }
        }
    }

    componentDidMount() {
        window.firebase.database().ref('messages/').on('value', snap => {
            const currentMessages = snap.val();

            if (currentMessages != null) {
                this.setState({
                    messages: currentMessages
                })
            }
        });

        this.props.getMessages();
    }

    updateMessage(e) {
        if (e.target.message !== "" && e.target !== null) {
            this.setState({ message: e.target.value });
            //this.props.saveNewMessage(e);
        }
    }

    changeUser(e) {
        this.setState({ usuario: e.target.value });
    }

    render() {
        const { messages } = this.state;
        const messagesList = messages.map(message => {

            return (

                <table className="table table-striped" key={message.id} name="tabla">
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
}

function mapStateToProps(state, ownProps) {
    return {
        messages: state.messages
    }
}

// function mapDispatchToProps(){

// }

export default connect(mapStateToProps, { getMessages, saveNewMessage })(ChatRoom);
//export default ChatRoom;