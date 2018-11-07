import React, { Component } from 'react';

import Header from './Header'
import Sidebar from './Sidebar';
import Main from './Main';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="content">
                    <Sidebar />
                    <Main />
                </div>
            </React.Fragment>
        );
    }
}
