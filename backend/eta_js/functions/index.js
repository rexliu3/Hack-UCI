const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});

    const queue = db.collection('covid-19 vaccine queue');

    await queue.doc('cloud_fn_test').set({
	age: 19,
	comorbities: {
	    diabetes: false,
	    high_bp: false,
	    obese: false,
	    smoker: false,
	},
	demographic: false,
	res_type: "Urban",
	social_dist: 3,
	state_initials: "WY",
	test_freq: 2
    });

    response.send("Hello from Firebase!");
});
