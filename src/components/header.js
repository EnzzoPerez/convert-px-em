import React, { Component } from 'react';
import "../App.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title">
                    <p>Converter "px, em, rem" </p>
                </div>
                <div className="subTitle">
                    <p>Podes realizar las siguientes conversiones:</p>
                    <br></br>
                    <p>* Pixeles -> em o rem</p>
                    <p>* em o rem -> Pixeles</p>
                    <br></br>
                    <p>Tene en cuenta que: 1 em = 1 rem = 16 px</p>
                </div>
            </div>
        );
    }
}

export default Header;