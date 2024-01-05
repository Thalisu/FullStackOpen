import { useState } from "react";
import countriesService from "../services/countries";

const useCountry = () => {
  const [countries, setCountries] = useState("");
  const handleClick = async (filter, result) => {
    const response = await countriesService.get(filter);
    if (response !== "fetchData") {
      setCountries([response]);
      return;
    }
    if (result.isSuccess) {
      const allCountries = result.data;
      const filteredCountries = allCountries.filter((country) =>
        country.name.common.match(RegExp(filter, "i"))
      );
      if (filteredCountries[0] !== undefined) {
        setCountries(filteredCountries);
        return;
      }
      setCountries("no countries found");
      return;
    }
    setCountries(["no countries found / no data fetched"]);
  };
  return { handleClick, countries };
};
export default useCountry;
