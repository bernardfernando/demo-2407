import { useState } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({});

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  async function getLocation() {
    const API= 

    const res = await axios.get(API)

    setLocation(res.data[0]);

    handleMap(re.data[0])   // invole soon after the above
  }
function handleMap(data) {
  console.log(data);
const API = 
const res = axios.get(API)
}

// replace above with this
async function getLocation(event){
  try {event.preventDefault();
  event.target.input.value ="";
  
} catch 

  return (
    <div className="App">
      <form onSubmit={getLocation}></form>
      <input
        type="text"
        placeholder="search for a city"
        onChange={handleSearch}
      />
      <button onClick={getLocation}>Explore</button>
      <p>{location.display_name}</p>
      {map && <img src={map} alt=""}
    </div>
  );
}

export default App;
