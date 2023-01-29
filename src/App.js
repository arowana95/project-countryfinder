import { useEffect , useState } from 'react';
import Card from './components/card';
import logo from './logo.png'

function App() {
  const [countries , setCountries] = useState([]);
  const [entry, setEntry] = useState('');

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err))
  },[]);

  function seek(e) {
    setEntry(e.target.value);
  }


  return (
    <>
    <div id='band'>
      <div id='logo'><img src={logo} alt="Country Finder" /></div>
      <div id='couple'>
      <input type="checkbox" id='boxer'/>
      <input type="text" id='bar' placeholder='Type a nation' value={entry} onChange={seek} autoComplete="off"/>
      <label htmlFor="boxer"><span className="material-symbols-outlined">search</span></label>
      </div>
    </div>
    <div id='container'>
     {countries.filter(country => country.name.toLowerCase().startsWith(entry.toLowerCase())).map((value, index) => <Card key={index} countries={value}/>)}
    </div>
    </>
  );
}

export default App;
