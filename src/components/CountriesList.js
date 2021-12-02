import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CountriesList(props) {
  const { handleLink } = props;
  const [countriesall, setCountries] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    }
    getData();
  }, []);

  return (
    <div>
      {countriesall.map((elem) => {
        return (
          <Link
            to={`/countries/${elem.cca3}`}
            onClick={() => {
              handleLink(elem);
            }}
          >
            <h4>{elem.name.common}</h4>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
