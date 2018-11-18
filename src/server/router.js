const Authentication = require('./controllers/authentication');
const DataQuery = require('./controllers/DataQuery');
const passportService = require('./services/passport');
const passport = require('passport');

//Stop passport from trying to default use sessions and cookies since we using JWT strategy
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
	//Standard auth mechanism for root of website
	app.get('/', requireAuth, function (req, res) {
		res.send({ hi: 'there' });
	});
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);
	app.get('/data/hotel', requireAuth, DataQuery.queryHotel);
	app.get('/data/experience', requireAuth, DataQuery.queryExperience);
	app.get('/data/restaurant', requireAuth, DataQuery.queryRestaurant);
}