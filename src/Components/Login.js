import React, { Component } from 'react';
import { auth } from '../Services/base';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props){
        super(props);
        this.email = null;
        this.passwd = null;

        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isLoggerId: false,
            error: false,
            isLogging: false
        }
    }
    handleLogin(){
        this.setState({
            isLogging: true,
            error: false
        })
        console.log('login', this.email.value);
        auth.signInWithEmailAndPassword(this.email.value, this.passwd.value).then((user)=>{
            console.log('logged in', user);
            this.setState({
                isLogging: true
            })
        })
        .catch(error =>{
            console.log(error);
            this.setState({
                error: true,
                isLogging: false
            })
        })
    }
    render(){
        if(this.state.isLogging){
            return <Redirect to='/admin' />
        }
        return(
            <div>
                <input type='email' ref={ref => this.email = ref}/>
                <input type='passwd' ref={ref => this.passwd = ref}/>
                { this.state.error && <p> E-mail e/ou senhas invalidos. </p> }
                <button disabled = {this.state.isLogging} onClick={this.handleLogin}> Entrar </button>
            </div>
        );
    }
}

export default Login;