const Razorpay = require("razorpay");

// Razorpay for payment getway

exports.instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY,
	key_secret: process.env.RAZORPAY_SECRET,
});
