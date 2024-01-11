import { useSelector, useDispatch } from "react-redux";
import { logout, fetchUser } from "../../reducers/actionCreators";
import { useLocalStorage } from "../../hooks";
import { useEffect } from "react";
import { NavBarContainer, NavBarLink, Logged } from "./Style";
const NavBar = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.loggedUser);
  const user = useLocalStorage("loggedBlogAppUser");
  useEffect(() => {
    user && dispatch(fetchUser(user));
  }, [dispatch, user]);

  return (
    <NavBarContainer>
      <NavBarLink to="/">Home</NavBarLink>
      <NavBarLink to="/users">Users</NavBarLink>
      {username ? (
        <>
          <NavBarLink to="/post">Add a blog</NavBarLink>
          <Logged>{username} logged in</Logged>
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            logout
          </button>
        </>
      ) : (
        <NavBarLink to="/login">Login</NavBarLink>
      )}
    </NavBarContainer>
  );
};
export default NavBar;
