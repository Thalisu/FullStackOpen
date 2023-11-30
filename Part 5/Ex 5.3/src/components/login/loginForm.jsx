import { useState } from "react";
import handleLogin from "./handleLogin";

const LoginForm = ({ error, setUser }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <form
      onSubmit={(event) =>
        handleLogin(event, error, setUser, credentials, setCredentials)
      }
    >
      <h3>Want to add blogs that you like? logIn!</h3>
      <div>
        <label htmlFor="user">Username:</label>
        <input
          id="user"
          type="text"
          value={credentials.username}
          name="Username"
          onChange={({ target }) =>
            setCredentials({
              username: target.value,
              password: credentials.password,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="pass">Password: </label>
        <input
          id="pass"
          type="password"
          value={credentials.password}
          name="Password"
          onChange={({ target }) =>
            setCredentials({
              username: credentials.username,
              password: target.value,
            })
          }
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
};
export default LoginForm;
