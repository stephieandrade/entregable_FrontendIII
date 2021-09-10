import React, { Component } from 'react';


class Guardado extends Component{
    render() { return (
        <div className="recordatorio">
            <h3>Eleccion anterior: {this.props.historialAnterior}</h3>
            <h4>Historial{this.props.historial}</h4>
        </div>
    )}}

    export default Guardado;