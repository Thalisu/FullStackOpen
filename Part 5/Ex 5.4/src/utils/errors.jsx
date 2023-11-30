import { useState } from "react";
const Error = (handler, error) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const returnError = () => <h1>{errorMessage}</h1>;
  const setError = (error) => {
    setErrorMessage(error);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };
  if (handler === "error") {
    setError(error);
  }
  returnError();
};

export default Error;
