import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

class Main extends Component {
    renderContent = () => {
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
                    return (
                        <main className="wrap-content">
                            {
                                this.props.hotel.map((hotel) => {
                                    return (
                                        <Card
                                            key={hotel._id}
                                            cat="hotel"
                                            {...hotel}
                                        />
                                    )
                                })
                            }
                        </main>
                    );
                case ('experience'):
                    return (
                        <main className="wrap-content">
                            {
                                this.props.experience.map((exp) => {
                                    return (
                                        <Card
                                            key={exp._id}
                                            cat="experience"
                                            {...exp}
                                        />
                                    )
                                })
                            }
                        </main>
                    );
                case ('restaurant'):
                    return (
                        <main className="wrap-content">
                            {
                                this.props.restaurant.map((rest) => {
                                    return (
                                        <Card
                                            key={rest._id}
                                            cat="restaurant"
                                            {...rest}
                                        />
                                    )
                                })
                            }
                        </main>
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
    return { tabSelection: state.ui.tabSelection, jwt: state.auth.jwt, hotel: state.ui.hotel, experience: state.ui.experience, restaurant: state.ui.restaurant };
}

export default connect(mapStateToProps)(Main);