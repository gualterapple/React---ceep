import React, { Component } from "react";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

import "./estilo.css"
class CardNota extends Component {

  apagar(){
    this.props.delete(this.props.indice);
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
