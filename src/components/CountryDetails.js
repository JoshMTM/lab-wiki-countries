import React from 'react';
import { useParams } from 'react-router-dom';

export default function CountryDetails(props) {
  const { list, newCo } = props;
  const { code } = useParams();
  console.log(newCo);

  return (
    <div>
      <h1>{newCo.name}</h1>
      <h3>{newCo.capital}</h3>
      <img src={newCo.flag} alt="flag" />
    </div>
  );
}
