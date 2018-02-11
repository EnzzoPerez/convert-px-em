import React, { Component } from 'react';

class InputList extends Component {
    constructor(){
        super()
        this.state = {
            from: {input:0, select: 'px'},
            to: {input:0, select: 'px'},
        }

        this.handleInput=this.handleInput.bind(this)
        this.handleSelect=this.handleSelect.bind(this)
    }

    handleInput(event){
        let target = event.target
        console.log("IN=PUT", target.value);
        let from = {...this.state.from}
        from.input = target.value
        this.setState({
            from: from
        })
    }

    handleSelect(event){
        let target = event.target

        if (target.id === "from") {
            let from = {...this.state.from}
            from.select = target.value
            this.setState({
                from: from
            })
        } else {
            let to = {...this.state.to}
            to.select = target.value
            this.setState({
                to: to
            })
        }
    }


    render() {
        let medidas = ['px', 'em', 'rem']
        let opciones = []
        for (let index = 0; index < medidas.length; index++) {
            opciones.push(<option key={index} value={medidas[index]}>{medidas[index]}</option>)
        }

        return (
            <div>
                <input type="number" value={this.state.from.input} onChange={this.handleInput}/>
                <select id="from" value={this.state.from.select} onChange={this.handleSelect} >
                    {opciones}
                </select>

                <input type="number" disabled="true" value={this.state.to.input}/>
                <select id="to" value={this.state.to.select} onChange={this.handleSelect}>
                    {opciones}
                </select>
            </div>
        );
    }
}

export default InputList;