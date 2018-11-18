import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hotel from './Hotel';
import Card from './Card';

class Main extends Component {
    renderContent = () => {
        console.log(this.props)
        if (!this.props.jwt) {
            return (
                <main className="logged-out-view">
                    <div className="signed-out-message">
                        Please Sign in to See Contents
                        </div>
                </main>
            );
        }
        else {
            switch (this.props.tabSelection) {
                case ('hotel'):
                    if (this.props.hotel) {
                        return (
                            <main className="wrap-content">
                                {
                                    this.props.hotel.map((hotel) => {
                                        return (
                                            <Card
                                                key={hotel._id}
                                                {...hotel}
                                            />
                                        )
                                    })
                                }
                            </main>
                        );
                    }
                    else {
                        return <div>Loading!</div>
                    }
                case ('experience'):
                    return (
                        <Hotel />
                    );
                case ('restaurant'):
                    return (
                        <Hotel />
                    );
                default:
                    return (
                        <main className="logged-out-view">
                            <div className="signed-out-message">
                                Please Select a Sidebar to See Contents
                            </div>
                        </main>
                    );
            }
        }
    }
    render() {
        return (
            this.renderContent()
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { tabSelection: state.ui.tabSelection, jwt: state.auth.jwt, hotel: state.ui.hotel };
}

export default connect(mapStateToProps)(Main);