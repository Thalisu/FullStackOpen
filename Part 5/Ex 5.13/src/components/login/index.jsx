import { LoginForm } from "./loginForm";
import Toggle from "../../utils/toggleForms";
import PropTypes from "prop-types";

const Login = ({ message, setUser }) => {
  return (
    <>
      <h4>Add new blogs!</h4>
      <Toggle buttonLabel="Login">
        <LoginForm message={message} setUser={setUser} />
      </Toggle>
    </>
  );
};

Login.propTypes = {
  message: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};
export default Login;
