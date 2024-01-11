import { fetchBlogData, fetchUsersData } from "../../reducers/actionCreators";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Blogs, Login, PostBlog, Users, User, Blog } from "../index";

const AppRoutes = () => {
  const dispatch = useDispatch();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Blogs />} loader={dispatch(fetchBlogData())} />
      <Route path="/post" element={<PostBlog />} />
      <Route
        path="/users"
        element={<Users />}
        loader={dispatch(fetchUsersData())}
      />
      <Route path="/users/:id" element={<User />} />
      <Route path="/blogs/:id" element={<Blog />} />
    </Routes>
  );
};
export default AppRoutes;
