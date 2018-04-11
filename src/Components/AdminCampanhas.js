import React, { Component } from 'react';
import base from '../Services/base';

class AdminCampanhas extends Component{
    constructor(props){
        super(props);
        this.state = {
            campanhas: {}
        }

        this.renderCampanha = this.renderCampanha.bind(this);
        this.removerCampanha = this.removerCampanha.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    componentDidMount(){
        base.syncState('campanhas',{
            context: this,
            state: 'campanhas',
            asArray: false
        })
    }

    removerCampanha(key) {
        base.remove('campanhas/'+key, err=>{
            console.log(err);
        });
    }
    renderCampanha(key, campanha){
        return (
            <li key={key}>{campanha.nome}
                <button onClick={() => 1}>Editar</button>
                <button onClick={() => this.removerCampanha(key)}>Excluir</button>
            </li>
        );
    }
    handleSave(){
        const nome = this.nome.value;
        const descricao = this.descricao.value;

        base.push('campanhas', {
            data: {nome, descricao},
            then: err =>{
                if(!err){
                    this.nome.value = '';
                    this.descricao.value = '';
                }
            }
        })
    }
    render(){
        return(
            <div>
            <h1>Campanhas</h1>
            <h2>Nova Campanha</h2>
            Campanha: <input type="text" ref={ref => this.nome = ref} /> <br/>
            Descricao: <textarea type="text" ref={ref => this.descricao = ref} />
            <button onClick={() => this.handleSave()}> Salvar</button>
            <ul>
                {Object
                    .keys(this.state.campanhas)
                    .map(key => this.renderCampanha(key, this.state.campanhas[key]))}
            </ul>
            </div>
        );
    }
}

export default AdminCampanhas;
