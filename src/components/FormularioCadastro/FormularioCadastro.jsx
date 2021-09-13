import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento)
  {
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento)
  {
    this.texto = evento.target.value;
  }

  _criarCard(evento)
  {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota_prop(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarCard.bind(this)}>
        <input type="text" placeholder="Titulo" className="form-cadastro_input"
        onChange={this._handleMudancaTitulo.bind(this)}/>
        <textarea rows="15" placeholder="Escreva sua nota" className="form-cadastro_input"
        onChange={this._handleMudancaTexto.bind(this)} />
        <button className="form-cadastro_submit form-cadastro_input">Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;

