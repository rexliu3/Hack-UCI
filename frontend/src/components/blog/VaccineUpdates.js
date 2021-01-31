import React, { Component, useEffect } from 'react'
import CSVReader from 'react-csv-reader'
import ReactDOM from 'react-dom'
import { csv } from 'd3'

// const handleForce = (data, fileInfo) => console.log(data, fileInfo)
// const papaparseOptions = {
//     header: true,
//     dynamicTyping: true, 
//     skipEmptyLines: true,
//     transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
// };

// const reader = (
//     <div>
//         <CSVReader
//         cssClass = "react-csv-input"
//         onFileLoaded={handleForce}
//         parserOptions={papaparseOptions}
//         />
//     </div>
// )

const App = () => {
    useEffect(() => {
        csv('covid19_vaccinations_in_the_united_states.csv').then(data => {
            console.log(data)
        })
    }, [])

}

// total_vaccinations
export const calculateTotalDoses = () => {
    const totalVax = 0
    for (i = 0; i < data.length; i++) {
        totalVax += data[2]
    }
    return totalVax
}

// people_fully_vaccinated
export const calculateFullyVaccinated = () => {
    const fullVax = 0
    for (i = 0; i < data.length; i++) {
        fullVax += data[7]
    }
    return fullVax

}

// distributed vaccinations
export const calculateVaxDistributed = () => {
    const vaxDistributed = 0
    for (i = 0; i < data.length; i++) {
        vaxDistributed += data[1]
    }
    return vaxDistributed

}

// people_vaccinated
//number of people who have recieved at least one dose
export const calculateVaccinated = () => {
    const vax1Dose = 0
    for (i = 0; i < data.length; i++) {
        vax1Dose += data[5]
    }
    return vax1Dose

}

ReactDOM.render(<App/>, rootElement)
