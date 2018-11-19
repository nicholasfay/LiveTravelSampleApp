import React, { Component } from 'react';
import { connect } from 'react-redux';

import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Signout from './auth/Signout';

import Logo from '../img/logo.png';
import BookMark from '../img/SVG/bookmark.inline.svg';

class Header extends Component {
    renderLinks() {
        const { jwt, user } = this.props;

        if (jwt) {
            return (
                <nav className="user-nav">
                    <Signout />
                    <div className="user-nav__icon-box">
                        <BookMark className="user-nav__icon" />
                        <span className="user-nav__notification">
                            7
                        </span>
                    </div>
                    <div className="user-nav__user">
                        <img src={user["userImage"]} alt="user photo" className="user-nav__user-photo" />
                        <span className="user-nav__user-name">{user["name"]}</span>
                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav className="user-auth">
                    <Signin />
                    <Signup />
                </nav>
            );
        }
    }

    render() {
        return (
            <header className="header">
                <img src={Logo} alt="Trillo logo" className="logo" />
                {this.renderLinks()}
            </header>
        );
    }
}

function mapStateToProps(state) {
    return { jwt: state.auth.jwt, user: state.auth.user };
}

export default connect(mapStateToProps)(Header);