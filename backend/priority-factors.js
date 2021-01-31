const fetch = require("node-fetch");
const googleTrends = require('google-trends-api');

// get latest covid count of cases from each state + the growth rate over the past 60 days. 
// Returns: list of {state, cases, dailyIncrease, growth %}
const getCovidCases = async () => {
    try {
        const response = await fetch("https://api.covidtracking.com/v1/states/current.json");
        const data = await response.json();

        var relevantData = [];

        data.forEach(state => {
            relevantData.push({
                state: state.state,
                cases: state.positive,
                dailyIncrease: state.positiveIncrease,
                growth: (100 * state.positiveIncrease / (state.positive - state.positiveIncrease)).toFixed(2)
            });
        })
        console.log(relevantData);

    } catch (err) {
        console.log("error occurred.")
        console.log(err);
    }
}

//getCovidCases();

var count = 0;

// returns a list of regions & frequency of keyword search (interest rate)
const getKeywordFrequencyByState = async () => {
    const keywords = ["loss of taste covid"];
    // , "fever covid", "covid"
    keywords.forEach(keyword => {
        googleTrends.interestByRegion({ keyword: keyword, startTime: new Date('2021-01-27'), geo: 'US', resolution: 'REGION' })
            .then((res) => {
                const data = JSON.parse(res)['default']['geoMapData'];
                data.forEach(state => {
                    console.log(state['geoCode']);
                    console.log(state['geoName']);
                    console.log(state['value']);
                    console.log("-----------");
                    count += 1;
                })
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

getKeywordFrequencyByState();