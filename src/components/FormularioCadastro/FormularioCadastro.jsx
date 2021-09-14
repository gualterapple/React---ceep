import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
    this.state = {categorias: []}

  }

  componentDidMount()
  {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias)
  {
    this.setState({...this.state, categorias});
  }

  _handleMudancaTitulo(evento)
  {
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento)
  {
    this.texto = evento.target.value;
  }
  _handleChangeMudancaCategoria(evento)
  {
    this.categoria = evento.target.value;
  }

  _criarCard(evento)
  {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarCard.bind(this)}>
        <select 
        onChange={this._handleChangeMudancaCategoria.bind(this)}
        className="form-cadastro_input">
          <option>Sem Categoria</option>
          {this.props.categorias.categorias.map((categoria, index) =>{
              return <option key={index}>{categoria}</option>
            })} 
        </select>
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

