const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const accountSid = 'ACa40f5971b49ccec2f1f306a01990536c';
const authToken = '251f842caba8e3844d0772d7e83c6fcb';
const twilioNumber = '+16042006992';

exports.sayHey = functions.firestore
    .document("covid-19 vaccine queue/{id}")
    .onCreate((snap, context) => {
        const entry = snap.data();
        const name = entry.firstName;
        const number = entry.phone;
        const text = {
            body: `Hi ${name},
            This is a reminder that your vaccination scheduled for February 3rd is coming up in 4 days! We hope you're staying positive and testing negative. We look forward to having you.
            Vaccelerator`,
            to: number,
            from: twilioNumber
        }
        const client = require('twilio')(accountSid, authToken);
        client.messages.create(text).then(m => console.log('success'));
        return 'nice';
    });

exports.calculateWAP = functions.firestore
    .document("covid-19 vaccine queue/{id}")
    .onWrite((change, context) => {
        const user = change.after.data();
        if (user) {
            const newWAP = calculateWAP(user.age, user.healthWorker, user.careWorker, user.essentialWorker, user.pregnant);
            if (newWAP === user.WAP) {
                console.log("nothing to do");
                return null;
            }
            return change.after.ref.update({WAP: newWAP})
        } else {
            return null;
        }
    });

exports.calculateETA = functions.firestore
    .document("covid-19 vaccine queue/{id}")
    .onWrite((change, context) => {
        const user = change.after.data();

        if (user) {
            const newETA = calculateETA(user.WAP);
            if (newETA === user.ETA) {
                console.log("nothing to do");
                return null;
            }
            return change.after.ref.update({ETA: newETA})
        } else {
            return null;
        }
    });

exports.calculatePriority = functions.firestore
    .document("covid-19 vaccine queue/{id}")
    .onWrite((change, context) => {
        const user = change.after.data();

        if (user) {
            const newPriority = calculatePriority(user.WAP);
            if (newPriority === user.priority) {
                console.log("nothing to do");
                return null;
            }
            return change.after.ref.update({priority: newPriority})
        } else {
            return null;
        }
    });

function calculateWAP(age, healthWorker, careWorker, essentialWorker, pregnant) {
    const elderly = age >= 65;
    return 2 * elderly + 3 * healthWorker + 2 * careWorker + essentialWorker - 2 * pregnant + age / 65;
}

function calculateETA(WAP) {
    return Math.round((5 / Math.max(WAP, 1))  * 20);
}

function calculatePriority(WAP) {
    return Math.round((Math.min(7, WAP) / 7) * 100);
}
