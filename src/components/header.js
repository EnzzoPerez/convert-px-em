import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title">
                    <p>Converter "px, em, rem" </p>
                </div>
                <div className="subTitle">
                    <div className="ui centered cards">
                        <div className="ui card">
                            <div className="content">
                                <div className="header">Podes convertir</div>
                                <div className="description">
                                    <p>*De px --> em ó rem</p>
                                    <p>*De em ó rem  --> px</p>
                                </div>
                            </div>
                        </div>
                        <div className="ui card">
                            <div className="content">
                                <div className="header">A tener en cuenta:</div>
                                <div className="description">1 em = 1 rem = 16px</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;