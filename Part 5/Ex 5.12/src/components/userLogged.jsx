import PropTypes from "prop-types";
const UserLogged = ({ user, setUser }) => {
  return (
    <div>
      <p>{user.username} logged in</p>
      <button
        onClick={() => {
          window.localStorage.removeItem("loggedBlogAppUser");
          setUser(null);
        }}
      >
        logout
      </button>
    </div>
  );
};

UserLogged.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default UserLogged;
