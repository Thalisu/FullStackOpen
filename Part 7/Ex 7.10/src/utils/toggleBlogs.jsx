import { useState } from "react";
import PropTypes from "prop-types";

const Toggle = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return isHidden ? (
    <button onClick={toggleVisibility} id={props.id}>
      show
    </button>
  ) : (
    <>
      <button onClick={toggleVisibility}>hide</button>
      {props.children}
    </>
  );
};

Toggle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Toggle;
