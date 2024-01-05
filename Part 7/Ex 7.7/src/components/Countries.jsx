import PropTypes from "prop-types";

const Countries = ({ countries }) => {
  if (typeof countries === "string") return <p>{countries}</p>;
  
  if (countries.length === 1) {
    return countries.map((country, i) => {
      return (
        <div key={i}>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital[0]}</p>
          <p>Population: {country.population}</p>
          <h4>Languages:</h4>
          <ul>
            {Object.values(country.languages).map((language, i) => {
              return <li key={i}>{language}</li>;
            })}
          </ul>
          <img src={country.flags.png} alt="" />
        </div>
      );
    });
  }

  return (
    <ul>
      {countries.map((country, i) => {
        return <li key={i}>{country.name.common}</li>;
      })}
    </ul>
  );
};

export default Countries;
Countries.propTypes = {
  countries: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
