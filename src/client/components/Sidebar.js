import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Home from '../img/SVG/home.inline.svg';
import Key from '../img/SVG/key.inline.svg';
import Map from '../img/SVG/map.inline.svg';
import TakeOff from '../img/SVG/aircraft-take-off.inline.svg';

class Sidebar extends Component {
    dispatch = (type) => {
        this.props.tabSelect(type);
    }

    render() {
        return (
            <nav className="sidebar">
                <ul className="side-nav">
                    <li onClick={() => { this.dispatch('hotel') }} className={this.props.tabSelection == "hotel" ? "side-nav__item side-nav__item--active" : "side-nav__item"}>
                        <a href="#" className="side-nav__link">
                            <Home className="side-nav__icon" />
                            <span>Hotel</span>
                        </a>
                    </li>
                    <li onClick={() => { this.dispatch('flight') }} className={this.props.tabSelection == "flight" ? "side-nav__item side-nav__item--active" : "side-nav__item"}>
                        <a href="#" className="side-nav__link">
                            <TakeOff className="side-nav__icon" />
                            <span>Flight</span>
                        </a>
                    </li>
                    <li onClick={() => { this.dispatch('car') }} className={this.props.tabSelection == "car" ? "side-nav__item side-nav__item--active" : "side-nav__item"}>
                        <a href="#" className="side-nav__link">
                            <Key className="side-nav__icon" />
                            <span>Car Rental</span>
                        </a>
                    </li>
                    <li onClick={() => { this.dispatch('tours') }} className={this.props.tabSelection == "tours" ? "side-nav__item side-nav__item--active" : "side-nav__item"}>
                        <a href="#" className="side-nav__link">
                            <Map className="side-nav__icon" />
                            <span>Tours</span>
                        </a>
                    </li>
                </ul>
                <div className="legal">
                    &copy; 2017 Trillo. All rights reserved.
            </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { tabSelection: state.ui.tabSelection };
}

export default connect(mapStateToProps, actions)(Sidebar);