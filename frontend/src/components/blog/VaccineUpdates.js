import React, { Component } from 'react'
import CSVReader from 'react-csv-reader'
import data from '../vaccinationData/us_states_vaccinations'

const handleForce = (data, fileInfo) => console.log(data, fileInfo)
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

// total_vaccinations
export const calculateTotalDoses = () => {

}

const getDataByState = (state) => {

}

// people_fully_vaccinated
export const calculateFullyVaccinated = () => {

}

// daily_vaccinations
export const calculateDailyVaccinated = () => {

}

// people_vaccinated
//number of people who have recieved at least one dose
export const calculateVaccinated = () => {

}