import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.users);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "350px",
        paddingLeft: "20px",
      }}
    >
      <div>
        <h1 style={{ paddingLeft: "15px", marginBottom: 0 }}>Users </h1>
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.username}</li>;
          })}
        </ul>
      </div>
      <div>
        <h1 style={{ marginBottom: 0 }}> Blogs created</h1>
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.blogs.length}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Users;
