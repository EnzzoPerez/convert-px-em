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
                    <div class="ui centered cards">
                        <div class="ui card">
                            <div class="content">
                                <div class="header">Podes convertir</div>
                                <div class="description">
                                    <p>*De px --> em ó rem</p>
                                    <p>*De em ó rem  --> px</p>
                                </div>
                            </div>
                        </div>
                        <div class="ui card">
                            <div class="content">
                                <div class="header">A tener en cuenta:</div>
                                <div class="description">1 em = 1 rem = 16px</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;