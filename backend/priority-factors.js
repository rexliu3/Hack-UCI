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


// Data to retrieve: 
//      Keyword search frequency by state
//          loss of taste, fever, covid
const getKeywordFrequencyByState = async () => {
    const keywords = ["loss of taste covid", "fever covid", "covid"];

}
