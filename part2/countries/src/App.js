import { useState, useEffect } from 'react';
import FindCountries from './components/FindCountries';
import Country from './components/Country';
import './App.css';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => setCountries(response.data));
  }, []);

  const searchCountry = (event) => {
    setSearch(event.target.value);
    setFilterResults(
      countries.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) !== -1
      )
    );
  };

  const showCountries = () => {
    filterResults.map((country) => {
      <p key={country.name.common}>{country.name.common}</p>;
    });
  };

  return (
    <div className='App'>
      <FindCountries search={search} onChange={searchCountry} />
      {filterResults.length > 10 ? (
        <p>too many matches, specify another filter</p>
      ) : (
        showCountries()
      )}
      {filterResults.name && <Country data={setCountry} />}
    </div>
  );
}

export default App;
