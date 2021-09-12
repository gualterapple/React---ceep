import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css"

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
          {Array.of("Trabalho", "Tarbalho", "Estudos").map((categoria, index) => {
              return(
                <li key={index}>
                <div>{categoria}</div>
                <CardNota/>
                </li>
              );
          })}
      </ul>
    );
  }
}

export default ListaDeNotas;

