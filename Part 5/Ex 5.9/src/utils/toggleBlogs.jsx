import { useState } from "react";

const Toggle = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return isHidden ? (
    <button onClick={toggleVisibility}>show</button>
  ) : (
    <>
      <button onClick={toggleVisibility}>hide</button>
      {props.children}
    </>
  );
};

export default Toggle;
