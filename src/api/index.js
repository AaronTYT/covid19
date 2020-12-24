//dependency for requesting API calls.
import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

export const fetchData = async () =>{
    try{
        //data key is required then confirmed then values
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
        return {confirmed, recovered, deaths, lastUpdate}
        
    }catch(error){

    }
}

