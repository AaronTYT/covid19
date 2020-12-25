import React, {useState, useEffect} from 'react'
import {Line, Bar} from "react-chartjs-2"
import {fetchDailyData} from "../../api"
import styles from "./Chart.module.css"
function Chart() {
    const [dailyData, setDailyData] = useState({})
    
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        console.log(dailyData)
        fetchAPI()
    })

    const lineChart = (
        dailyData[0] ? (<Line 
            //datasets to be included with infected and deaths
            //unforunately the API does not have daily recoveries
            data={{
                labels: dailyData(({date}) => date),
                datasets: [{data: dailyData(({confirmed}) => confirmed),
                label: "Infected", borderColor: '#3333ff', fill: true},
                {}]
            }}
        />) : null
    )
    return (
        <div>
            <h1>Chart</h1>
        </div>
    )
}

export default Chart
