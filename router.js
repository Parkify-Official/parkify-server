const { Router } = require('express');
const { message } = require('./utils/message');
const { OK, NOT_FOUND } = require("./utils/messageTypes");

const router = Router();

router.route('/').get((req, res) => {
    message(res, OK, 'Welcome to Parkify API');
});
  
// const otpRouter = require('./v1/otp/otp.route');
// app.use('/otp', otpRouter);
  
router.route('*').all((req, res) => {
    message(res, NOT_FOUND, 'Route not found');
});

module.exports = router;