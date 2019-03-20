import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatRoom from './ChatRoom';


//////////////////////////////////////////////////////////////////////////
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import { connect } from 'react-redux';

class App extends Component {
    constructor(){
        super();
        this.state = {
            usuario: 'usuario',
            message: '',
            messages: [ ]
        }
    }
    render() {
        return (

            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="text-white">Bienvenido al Chat Room</span>
                </nav>
                <div className="col-md-8 centrar">

                    <img src={logo} className="App-logo" alt="logo" />                    

                    <div>
                        <div className="card">
                    <div className="card-header"><b>Chat Room</b>
                                <span className="badge badge-pill badge-danger ml-2">online</span>
                            </div>
                            <br></br>
                        <ChatRoom />
                    </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default App;