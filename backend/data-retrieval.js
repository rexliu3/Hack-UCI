const fetch = require("node-fetch");
const googleTrends = require('google-trends-api');
const admin = require('firebase-admin');
const serviceAccount = require('./firebase_credentials.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const database = admin.firestore();


// get latest covid count of cases from each state + the growth rate over the past 60 days. 
// Returns: list of {state, cases, dailyIncrease, growth %}
const getCovidCases = async () => {
    try {
        const response = await fetch("https://api.covidtracking.com/v1/states/current.json");
        const data = await response.json();
        const db = database.collection('covid-cases-growth-by-state')

        for (const state of data) {
            await db.doc(state.state).set({
                state: state.state,
                cases: state.positive,
                dailyIncrease: state.positiveIncrease,
                growth: (100 * state.positiveIncrease / (state.positive - state.positiveIncrease)).toFixed(2)
            })
        }

    }

    catch (err) {
        console.log("error occurred.")
        console.log(err);
    }
}



// returns a list of regions & frequency of keyword search (interest rate)
const getKeywordFrequencyByState = async () => {
    const keywords = ["loss of taste covid"];
    const db = database.collection('search-frequency-by-state')

    // , "fever covid", "covid"

    keywords.forEach(keyword => {
        googleTrends.interestByRegion({ keyword: keyword, startTime: new Date('2021-01-27'), geo: 'US', resolution: 'REGION' })
            .then(async (res) => {
                const data = JSON.parse(res)['default']['geoMapData'];

                for (const state of data) {
                    await db.doc(state.geoCode.slice(3)).set({
                        state: state['geoCode'],
                        stateName: state['geoName'],
                        interestScore: state['value']
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

// getCovidCases();
// getKeywordFrequencyByState();
