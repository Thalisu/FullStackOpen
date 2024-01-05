import { useQuery } from "@tanstack/react-query";
import countriesService from "./services/countries";
import { Countries, QueryStatus } from "./components";
import { useCountry, useField } from "./hooks";

const App = () => {
  const { handleClick, countries } = useCountry();
  const filter = useField("text");
  const result = useQuery({
    queryKey: ["countries"],
    queryFn: () => countriesService.getAll(),
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return (
    <>
      <QueryStatus status={result} />
      <label htmlFor="filter">Find countries: </label>
      <input id="filter" {...filter} />{" "}
      <button onClick={() => handleClick(filter.value, result)}>Find</button>
      <Countries countries={countries} />
    </>
  );
};
export default App;
