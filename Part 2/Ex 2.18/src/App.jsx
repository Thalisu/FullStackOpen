import { useState, useEffect } from "react";
import axios from "axios";

const Countries = ({ base: { 0: countries, 1: filter } }) => {
  if (countries !== "") {
    let countrie = countries.filter((countries) =>
      countries.name.common.match(RegExp(filter, "i"))
    );
    if (countrie.length < 10 && countrie.length > 1) {
      return countrie.map((countrie, i) => {
        return <p key={i}>{countrie.name.common}</p>;
      });
    }
    if (countrie.length === 1) {
      return countrie.map((countrie, i) => {
        return (
          <div key={i}>
            <h1>{countrie.name.common}</h1>
            <p>Capital: {countrie.capital[0]}</p>
            <p>Area: {countrie.area}</p>
            <h4>Languages:</h4>
            <ul>
              {Object.values(countrie.languages).map((language, i) => {
                return <li key={i}>{language}</li>;
              })}
            </ul>
            <img src={countrie.flags.png} alt="" />
          </div>
        );
      });
    }
  }
};

export default function App() {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState("");
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  return (
    <>
      <label htmlFor="filter">Find countries </label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <Countries base={[countries, filter]} />
    </>
  );
}
