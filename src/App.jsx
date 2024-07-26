import { useEffect,useState } from 'react';
import './App.css'
import axios from "axios"
import Search from './components/searchBar/searchBar'

function App() {
  const [search,setSearch] = useState("unnao");
  const [details,setDetails] = useState({});

  async function getWeather(){
        try{
          let response =await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${search}&apikey=sv7Z97dPcZxE8bJvthImf5WXWn3XlOeL`) ;
          let details = response.data.data.values;
          console.log(details);
          let name = response.data.data.name;
          setDetails({
                        "temperature":details.temperature,
                        "humidity":details.humidity,
                        "windSpeed":details.windSpeed,
                        "name":details.name
                    })
            }
            catch(err){
              console.error("something went wrong !!")
            }
  }

useEffect(() =>{
     getWeather()
    },[search])

  return (
                <div className='parent'>
                    <Search result={setSearch}/>
                    {details && 
                        <div className='details'>
                              <h3>Temperature:{details.temperature}</h3>
                              <h3>Humidity:{details.humidity}%</h3>
                              <h3>Wind-speed:{details.windSpeed}kmph</h3>         
                        </div>
                    }
                    <h6>*Results displayed during initial render are for Unnao(default)</h6>
                </div>
  
            )
   
  
}

export default App
