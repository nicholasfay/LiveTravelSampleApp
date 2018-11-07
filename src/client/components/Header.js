import React, { Component } from 'react';
import { connect } from 'react-redux';

import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Signout from './auth/Signout'

import Logo from '../img/logo.png';
import Glass from '../img/SVG/magnifying-glass.inline.svg';
import BookMark from '../img/SVG/bookmark.inline.svg';
import Chat from '../img/SVG/chat.inline.svg';

class Header extends Component {
    onClick() {
        console.log("Ive been clicked")
    }

    renderLinks() {
        if (this.props.jwt) {
            return (
                <nav className="user-nav">
                    <Signout />
                    <div className="user-nav__icon-box">
                        <BookMark className="user-nav__icon" />
                        <span className="user-nav__notification">
                            7
                        </span>
                    </div>
                    <div className="user-nav__icon-box">
                        <Chat className="user-nav__icon" />
                        <span className="user-nav__notification">
                            13
                        </span>
                    </div>
                    <div className="user-nav__user">
                        <img src="./img/user.jpg" alt="user photo" className="user-nav__user-photo" />
                        <span className="user-nav__user-name">Jonas</span>
                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav className="user-nav">
                    <div onClick={this.onClick} className="user-nav__user">
                        <span className="user-nav__user-name">
                            <Signin />
                        </span>
                        <span className="user-nav__user-name">
                            <Signup />
                        </span>
                    </div>
                </nav>
            );
        }
    }

    render() {
        return (
            <header className="header">
                <img src={Logo} alt="Trillo logo" className="logo" />
                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search hotels" />
                    <button className="search__button">
                        <Glass className="search__icon" />
                    </button>
                </form>
                {this.renderLinks()}
            </header>
        );
    }
}

function mapStateToProps(state) {
    return { jwt: state.auth.jwt };
}

export default connect(mapStateToProps)(Header);