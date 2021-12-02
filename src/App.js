import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import countriesList from './countries.json';

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  const [coutryall, setCountries] = useState(countriesList);
  const [newCountry, setNewCountry] = useState();

  function getOneCountry(oneInchi) {
    const myCountry = {
      name: oneInchi.name.common,
      capital: oneInchi.capital,
      flag: oneInchi.flags.svg,
      population: oneInchi.name.population,
    };
    console.log(myCountry);
    setNewCountry(myCountry);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={coutryall} handleLink={getOneCountry} />
          <Routes>
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route
              path="/countries/:code"
              element={<CountryDetails list={coutryall} newCo={newCountry} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
