import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Home from '../img/SVG/home.inline.svg';
import Experience from '../img/SVG/experience.inline.svg';
import Food from '../img/SVG/food.inline.svg';

class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
            "tabSelection": "",
            "clickPos": "up"
        }
    }

    dispatch = (type) => {
        if (this.props.jwt) {
            this.props.tabSelect(type, Date.now());
        }
    }

    onMouseDown = (type) => {
        this.setState({ "clickPos": "down", "tabSelection": type })
    }

    onMouseUp = () => {
        this.setState({ "clickPos": "up" })
    }

    render() {
        let classNameHotel = "side-nav__item"
        let classNameExp = "side-nav__item"
        let classNameRest = "side-nav__item"

        if (this.props.jwt) {
            if (this.state.tabSelection == "hotel") {
                if (this.state.clickPos == "down") {
                    classNameHotel = "side-nav__item side-nav__item--clicked"
                }
                else {
                    classNameHotel = "side-nav__item side-nav__item--active"
                }
            }
            else if (this.state.tabSelection == "experience") {
                if (this.state.clickPos == "down") {
                    classNameExp = "side-nav__item side-nav__item--clicked"
                }
                else {
                    classNameExp = "side-nav__item side-nav__item--active"
                }
            }
            else if (this.state.tabSelection == "restaurant") {
                if (this.state.clickPos == "down") {
                    classNameRest = "side-nav__item side-nav__item--clicked"
                }
                else {
                    classNameRest = "side-nav__item side-nav__item--active"
                }
            }
        }
        else{
            classNameHotel = "side-nav__item side-nav__item--disabled"
            classNameExp = "side-nav__item side-nav__item--disabled"
            classNameRest = "side-nav__item side-nav__item--disabled"
        }
        let linkClass = (this.props.jwt ? "side-nav__link" : "side-nav__link side-nav__link--disabled")
        return (
                <nav className="sidebar">
                    <ul className="side-nav">
                        <li onMouseDown={() => { this.onMouseDown("hotel") }} onMouseUp={this.onMouseUp} onClick={() => { this.dispatch('hotel') }} className={classNameHotel}>
                            <a className={linkClass}>
                                <Home className="side-nav__icon" />
                                <span className="side-nav__text">Hotel</span>
                            </a>
                        </li>
                        <li onMouseDown={() => { this.onMouseDown("experience") }} onMouseUp={this.onMouseUp} onClick={() => { this.dispatch('experience') }} className={classNameExp}>
                            <a className={linkClass}>
                                <Experience className="side-nav__icon" />
                                <span className="side-nav__text">Experiences</span>
                            </a>
                        </li>
                        <li onMouseDown={() => { this.onMouseDown("restaurant") }} onMouseUp={this.onMouseUp} onClick={() => { this.dispatch('restaurant') }} className={classNameRest}>
                            <a className={linkClass}>
                                <Food className="side-nav__icon" />
                                <span className="side-nav__text">Restaurants</span>
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
    return { tabSelection: state.ui.tabSelection, jwt: state.auth.jwt };
}

export default connect(mapStateToProps, actions)(Sidebar);