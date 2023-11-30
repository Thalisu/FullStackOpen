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

export default UserLogged;
