import React from 'react';

const GetDetails = ({info, country}) =>{
    if(info === "Demography"){
      return(
      <>
    <h3>Demography</h3>
    <div>
      <b>Population: </b>
      {country.population}
    </div> 
    <div>
      <b>Area: </b>
      {country.area} km2
    </div>
  </>
      )
    } else if(info === "Location"){
      return(
        <>
        <h3>Location</h3>
        <div>
          <b>Continent: </b>
          {country.continents?.[0]}
        </div>
        <div>
          <b>Region: </b>
          {country.region}
        </div>
        <div>
          <b>Sub Region: </b>
          {country.subregion}
        </div>
      </>
      )
    } else {
      return(
      <>
    <h3>Capital</h3>
    <div>
      <b>Capital: </b>
      {country.capital?.[0]}
    </div>
  </>
      )
    }
  }

export default GetDetails;