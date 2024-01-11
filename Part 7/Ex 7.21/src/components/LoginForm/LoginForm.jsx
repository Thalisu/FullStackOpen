import { useNavigate } from "react-router-dom";
import { useField } from "../../hooks";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/actionCreators";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useField("text");
  const password = useField("password");

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch(setUser(username.value, password.value));
    navigate("/");
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={(event) => onSubmit(event)}>
        <div>
          username: <input {...username} />
        </div>
        <div>
          password: <input {...password} />
        </div>
        <button type="submit">login </button>{" "}
        <button type="button" onClick={() => navigate("/")}>
          cancel
        </button>
      </form>
    </div>
  );
};

export default Login;
