import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        const { description, name, rating, "image-preview": imagePreview } = this.props;

        let imageStyle = {
            backgroundImage: "url(" + imagePreview + ")",
            backgroundSize: "cover",

        }

        return (
            <div className="card">
                <div className="card__surface">
                    <div className="card__item" style={imageStyle} />
                    <div className="card__details">
                        <div className="card__explanation">
                            <h2 className="card__title">{name}</h2>
                            <p className="card__description">{description}</p>
                        </div>
                        <div className="card__rating">
                            {rating}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
