import logo from './logo.svg';
import React from "react"

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from "./api"

//Functional components (not ES6) does not require lifecycle methods and states
//Class components (ES6) allows lifecycle methods and states

class App extends React.Component{

 state = {
   data: {}
 }
  
  async componentDidMount(){
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})
  }

  render(){
    const {data} = this.state
    return(
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}

export default App;
