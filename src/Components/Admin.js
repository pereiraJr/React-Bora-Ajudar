import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../Services/base';
import AdminCampanhas from './AdminCampanhas';

const AdminHome = props =><p> Seja Bem Vindo ! </p>
class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthing: true,
            isLoggedIn: false,
            user: null
        }
    }
    componentDidMount(){
        auth.onAuthStateChanged(user =>{
            this.setState({
                isAuthing: false,
                isLoggedIn: !!user,
                user: user
            });
        })
    }
    render(){
        if(this.state.isAuthing){
        return (<p>Aguarde...</p>);
        }
        if(!this.state.isLoggedIn){
        return (<Redirect to='/login'/>);
        }

        return (
            <div className ='card'>
                <h1> Painel Adiministrativo</h1>
                <Route path='/' component={AdminHome}/>
                <Route 
                    path={`${this.props.match.url}/campanhas`} 
                    component={AdminCampanhas}/>
            </div>
        );
    }
}

export default Admin;