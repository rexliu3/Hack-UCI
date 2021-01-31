import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

/*
 *  Gets a user's ETA.
 *  @param: test
 */
export const getETA = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random() * 100);

    const data = {
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
    };
    const res = await db.collection('covid-19 vaccine queue').doc('cloud_fn_test').set(data);

    functions.logger.info("Hello logs!", {structuredData: true});
    response.send(number.toString());
});

/* interface UserForm { */
/*     state: string; */
/*     res_type: string; */
/*     social_dist: number; */
/*     test_freq: number; */
/*     demographic: boolean; */
/*     age: number */
/*     comorbities: number; */
/*     insured: boolean; */
/* } */

/* exports getWAP = functions.firestore */
/*     .document('users/{userID}') */
/*     .onWrite((change, context) => { */
/* 	// Get an object with the current document value. */
/* 	// If the document does not exist, it has been deleted. */
/* 	const user_profile = change.after.exists ? change.after.data() : null; */

/* 	// Calculate user's PVI offset relative to the rest of the population. */
/* 	let calculateUserRelativePosition = function(user) { */
/* 	    let res: number = 0; */

/* 	    // Calculate relative residential density score */
/* 	    switch(user.res_type) { */
/* 		case "Rural": { */
/* 		    res -= 4; */
/* 		    break; */
/* 		} case "Urban": { */
/* 		    res += 4; */
/* 		    break; */
/* 		} */
/* 	    } */

/* 	    res += Math.min(user.social_dist - 4, 4); */
/* 	    res += Math.min(user.test_freq - 4, 4); */
/* 	    res += (user.demographic) ? 4 : 0; */
/* 	    res += Math.min((user.age - 45) / 75 * 8, 8); */
/* 	    res += user.comorbities * 2; */
/* 	    res += (insured) ? 0 : 4; */

/* 	    return res; */
/* 	} */

/* 	// Get state */
/* 	let getStatePVI = function(user) { */
/* 	    // todo */
/* 	} */


/* }); */
