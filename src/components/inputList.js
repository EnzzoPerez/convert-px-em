import React, { Component } from 'react';
import "./inputList.css";

class InputList extends Component {
    constructor(){
        super()
        this.state = {
            from: {input:0, select: 'px'},
            to: {input:0, select: 'px'},
        }

        this.handleInput=this.handleInput.bind(this)
        this.handleSelect=this.handleSelect.bind(this)
        this.convertidor=this.convertidor.bind(this)
    }

    handleInput(event){
        let target = event.target
        let from = {...this.state.from}
        let to = {...this.state.to}

        from.input = target.value
        to.input = this.convertidor(from.input, from.select, this.state.to.select)
        
        this.setState({
                from: from,
                to: to
        })
        
    }

    handleSelect(event){
        let target = event.target
        let from = {...this.state.from}
        let to = {...this.state.to}

        if (target.id === "from") {
            from.select = target.value
            to.input = this.convertidor(from.input, from.select, this.state.to.select)

            this.setState({
                from: from,
                to: to
            })
        } else {
            to.select = target.value
            to.input = this.convertidor(from.input, from.select, to.select)

            this.setState({
                from: from,
                to: to
            })
        }
    }

    convertidor(inpFrom, selFrom, selTo){
        let valorConvertido
        
        if (selFrom === 'px'){
            if (selTo === 'em' || selTo === 'rem') 
                valorConvertido = parseFloat(inpFrom) * 0.063
        }
        else if(selFrom === 'em' || selFrom === 'rem'){
            if (selTo === 'px') {
                valorConvertido = parseFloat(inpFrom) * 16
            } 
        }
        return valorConvertido
    }


    render() {
        let medidas = ['px', 'em', 'rem']
        let opciones = []
        for (let index = 0; index < medidas.length; index++) {
            opciones.push(<option key={index} value={medidas[index]}>{medidas[index]}</option>)
        }

        return (
            <div className="converter">
                <div className="ui labeled input">
                    <div class="ui label label">N° a convertir</div>
                    <input type="number" value={this.state.from.input} onChange={this.handleInput}/>
                    <select className="select" id="from" value={this.state.from.select} onChange={this.handleSelect} >
                        {opciones}
                    </select>
                </div>
                <div className="ui labeled input">
                    <div class="ui label label">N° Convertido</div>
                    <input class="ui input" type="number" readonly value={this.state.to.input || '0'}/>
                    <select className="select" id="to" value={this.state.to.select} onChange={this.handleSelect}>
                        {opciones}
                    </select>
                </div>
            </div>
        );
    }
}

export default InputList;