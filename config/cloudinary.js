const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: process.env.CLOUD_NAME, // folder name
			api_key: process.env.API_KEY,      // Cloudnary api key
			api_secret: process.env.API_SECRET, // cloudnary secret api ket
		});
	} catch (error) {
		console.log(error);
	}
};
