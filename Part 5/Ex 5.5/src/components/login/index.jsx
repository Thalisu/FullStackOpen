import { useState } from "react";
import { LoginForm } from "./loginForm";
import Toggle from "../../utils/toggle";

const Login = ({ message, setUser }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <h4>Add new blogs!</h4>
      <Toggle buttonLabel="Login">
        <LoginForm message={message} setUser={setUser} />
      </Toggle>
    </>
  );
};
export default Login;
