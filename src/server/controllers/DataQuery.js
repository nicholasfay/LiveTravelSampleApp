const mongoose = require('mongoose');

exports.queryHotel = function (req, res, next) {
    mongoose.connection.db.collection('hotels', function (err, collection) {
        if (err) throw err;
        collection.find({}).toArray(function (err, hotels) {
            res.send(hotels)
        });
    });
}

exports.queryExperience = function (req, res, next) {
    mongoose.connection.db.collection('experiences', function (err, collection) {
        if (err) throw err;
        collection.find({}).toArray(function (err, experiences) {
            res.send(experiences)
        });
    });
}

exports.queryRestaurant = function (req, res, next) {
    mongoose.connection.db.collection('restaurants', function (err, collection) {
        if (err) throw err;
        collection.find({}).toArray(function (err, restaurants) {
            res.send(restaurants)
        });
    });
}