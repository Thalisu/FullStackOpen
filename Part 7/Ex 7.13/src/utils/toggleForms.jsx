import { useState } from "react";
import PropTypes from "prop-types";

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
Toggle.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Toggle;
