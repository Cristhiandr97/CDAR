import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import SegundaPagina from './SegundaInterfaz';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {

  redirigir(){
    ReactDOM.render(<SegundaPagina></SegundaPagina>,document.getElementById("root"));
  }

    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
      
      return (
        <div>
          
            {
              user
                ? <p>Hola, {user.displayName}</p>
                : <p>Por favor registrese.</p>
            }
  
            {
              user
                ? <button onClick={signOut}>Desconectar</button>
                : <button onClick={signInWithGoogle}>Iniciar sesion con google</button>                
            }
            <input type="button" value="Navegar" onClick={this.redirigir}></input>
        </div>
      );
    }
  }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);

