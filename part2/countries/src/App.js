import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import ListCountries from './components/ListCountries';

import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  // const [filterResults, setFilterResults] = useState([]);
  // const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => setCountries(response.data));
  }, []);

  const searchCountry = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const searchedCountries = search.length
    ? countries.filter(
        (country) => country.name.common.toLowerCase().indexOf(search) !== -1
      )
    : countries;

  console.log(searchedCountries);

  // const showCountries = () => {
  //   filterResults.map((country) => {
  //     <p key={country.name.common}>{country.name.common}</p>;
  //   });
  // };

  return (
    <div className='App'>
      <Filter search={search} onChange={searchCountry} />
      {/* {filterResults.length > 10 ? (
        <p>too many matches, specify another filter</p>
      ) : (
        showCountries()
      )}
      {filterResults.name && <Country data={country} />} */}
      <ListCountries countries={searchedCountries} />
    </div>
  );
}

export default App;
