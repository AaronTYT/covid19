import logo from './logo.svg';
import React from "react"

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from "./api"

//Functional components (not ES6) does not require lifecycle methods and states
//Class components (ES6) allows lifecycle methods and states

class App extends React.Component{
  async componentDidMount(){
    const data = await fetchData();
    console.log(data)
  }

  render(){
    return(
      <div className={styles.container}>
        <Cards/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}

export default App;
