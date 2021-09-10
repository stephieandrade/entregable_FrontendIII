import React, { Component } from "react";
import data from "../data.json";
import Botones from "../Botones";
import Guardado from "../Guardado";
//import "src/index.css";
const historial = [];

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: {},
      indice: 0,
      opcionElegida: "",
      preguntaMostrada: 1
    };
  }
  componentWillMount() {
    this.setState({ datos: data });
  }

  handleClick = (e) => {
    e.preventDefault();
    const opcion = e.target.id;
    //console.log(opcion);
    if (this.state.preguntaMostrada <= 4) {
      historial.push(opcion);
      this.setState({
        preguntaMostrada: this.state.preguntaMostrada + 1,
        opcionElegida: opcion,
        indice: this.state.datos.findIndex((dato)=> dato.id ===( this.state.preguntaMostrada + 1) + opcion.toLowerCase()) 
      });
    } else {
      alert("fin");
    }
  };

  render() {
    console.log(historial.length);
    return (
      <div className="layout">
        <div className="historia">
          {this.state.datos[this.state.indice].historia}{" "}
        </div>
        <Botones
          handleClick={this.handleClick}
          opciones={this.state.datos[this.state.indice].opciones}
          
        />
        <div className="recordatorio">
          <Guardado
            historialAnterior={this.state.opcionElegida}
            historial={historial.map((e, index) => (
              <div key={index}>{e}</div>
            ))}
          />
        </div>
      </div>
    );
  }
}

export default Principal;
