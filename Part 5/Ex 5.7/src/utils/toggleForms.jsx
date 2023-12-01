import { useState } from "react";

const Toggle = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return isHidden ? (
    <button onClick={toggleVisibility}>{props.buttonLabel}</button>
  ) : (
    <>
      {props.children}
      <button onClick={toggleVisibility}>cancel</button>
    </>
  );
};

export default Toggle;
