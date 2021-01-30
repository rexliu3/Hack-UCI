const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const accountSid = 'AC351c4c50bb78edb716e3605652a1e2af';
const authToken = 'f64c80aea551d9454f4af4094f37eab1';
const twilioNumber = '+16042008278';


const message = {
    body: 'Hello',
    to: '+16045003065',
    from: twilioNumber
}


exports.sayHello = functions.https.onCall((data, context) => {
    const client = require('twilio')(accountSid, authToken);
    client.messages.create(message).then(message => console.log('success'));
    return 'nice'
});

exports.sayHey = functions.firestore
    .document("covid-19 vaccine queue/{id}")
    .onCreate((snap, context) => {
        const entry = snap.data();
        const name = entry.firstName;
        const number = entry.phone;
        const text = {
            body: `hey ${name}!`,
            to: number,
            from: twilioNumber
        }
        const client = require('twilio')(accountSid, authToken);
        client.messages.create(text).then(m => console.log('success'));
        console.log(name, number);
});

exports.alertETA = functions.firestore
    .document("")