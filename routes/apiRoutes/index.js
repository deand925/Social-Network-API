const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

Router.use('/users', userRoutes);
Router.use('/thoughts', thoughtRoutes);

module.exports = router;