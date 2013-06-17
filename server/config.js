var config = require('config-env').define('NODE_ENV', function (config) {
	config.common({
		name: 'flouss',
		// Express port
		express_port: process.env.PORT || 3000,
	});
	
	config.config('development', {
		// MongoDB connexion
		mongo_uri: 'mongodb://localhost/flouss',
		// Cookie secret
		cookie_secret: 'YOLO',
		// Cookie MaxAge
		cookie_maxage: 2 * 60 * 60 * 1000,
		// Amazon Credentials
		aws_accessKeyId: 'AAAAAAAAAAAAAAAAAAA',
		aws_secretAccessKey: 'XXXXXXXXXXXXXXXX',
		// Amazon Datacenter Region
		aws_regin: 'us-east-1',
		// Stripe Private Key
		stripe_privateKey: 'SSSSSSSSSSSSSSSSSSSS',
		// Stripe Default Currency
		stripe_currency: 'usd',
		// Pusher App Id
		pusher_appId: '123456789',
		// Pusher Public Key
		pusher_publicKey: 'PPPPPPPPPPPPPPPP',
		// Pusher Private Key
		pusher_privateKey: 'XXXXXXXXXXXXXXXX'
	});

	config.config('production', {
		// MongoDB connexion
		mongo_uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
		// Cookie secret
		cookie_secret: '{eb+uq44KSvf.YM5+{7E1/;ZYfH)U3?wJcRPTY+6a}7j8+}F,_)})5M_~b?z5KC,',
		// Cookie MaxAge
		cookie_maxage: 60 * 60 * 1000,
		// Amazon Credentials
		aws_accessKeyId: 'AAAAAAAAAAAAAAAAAAA',
		aws_secretAccessKey: 'XXXXXXXXXXXXXXXX'
	});
});

module.exports = config;
