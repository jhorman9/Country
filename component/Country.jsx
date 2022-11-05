import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import GetDetails from "./GetDetails";

const Country = () => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState("Demography");
  const [data, setData] = useState("venezuela");

  useEffect(() => {
      axios
        .get(`https://restcountries.com/v3.1/name/${data}?fullText=true`)
        .then((res) => {
          setIsLoading(false);
          setCountry(res.data[0]);
        })
  }, []);

  const handler = (e) =>{
    axios
        .get(`https://restcountries.com/v3.1/name/${data}?fullText=true`)
        .then((res) => setCountry(res.data[0]));
  }
  console.log(country)
//RENDERIZADO CONDICIONAL// 
  return (
    <div className="Input">
      <form onSubmit={handler}>
        <input
        type="text"
        value = {data}
        onChange={e => setData(e.target.value)}
        />
      </form>
       <button onClick={handler}>Search</button> 
      {isLoading ? (
        <h1>Loading...</h1>
        ) : (
          <div className="Country">
          <h1>{country.name?.official}</h1>
          <img src={country.flags?.svg} style={{ width: "300px" }} alt="" />
          <GetDetails info = {info} country ={country} />
          <div>
            <button onClick={() => setInfo("Demography")}>Demography</button>
            <button onClick={() => setInfo("Location")}>Location</button>
            <button onClick={() => setInfo("Capital")}>Capital</button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Country;
{/* {info === "Demography" ? (
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
) : info === "Location" ? (
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
) : (
  <>
    <h3>Capital</h3>
    <div>
      <b>Capital: </b>
      {country.capital?.[0]}
    </div>
  </>
)} */}