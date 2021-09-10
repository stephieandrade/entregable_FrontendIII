import React, { Component } from 'react';


class Botones extends Component{
    render(){
        //console.log(this.props.opciones)
        return (<div className = "opciones">
            <div className = "opcion">
                <button id= "A" className = "botones" onClick={this.props.handleClick}>A</button>
                <h2>{this.props.opciones.a}</h2>
                </div>
            <div>
                <button id= "B" className = "botones" onClick={this.props.handleClick}>B</button>
                <h2>{this.props.opciones.b}</h2>
            </div>

        </div>)
    }
    
}

export default Botones