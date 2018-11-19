import React, { Component } from 'react';
import { CastError } from 'mongoose';

export default class Card extends Component {
    render() {
        const { description, name, rating, "image-preview": imagePreview, cat } = this.props;

        let imageStyle = {
            backgroundImage: "url(" + imagePreview + ")",
            backgroundSize: "cover",

        }

        let className = 'card__rating card__rating';

        switch (cat) {
            case ("hotel"):
                className = className + "--hotel";
                break;
            case ("experience"):
                className = className + "--experience";
                break;
            case ("restaurant"):
                className = className + "--restaurant";
                break;
            default:
                break;
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
                        <div className={className}>
                            {rating}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
