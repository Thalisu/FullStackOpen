import { useState } from "react";
import handleLogin from "./handleLogin";

export const LoginForm = ({ message, setUser }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  return (
    <form
      onSubmit={(event) =>
        handleLogin(event, message, setUser, credentials, setCredentials)
      }
    >
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
