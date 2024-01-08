import { Blogs } from "./components/blogList";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <Notification />
      <h1>current added blogs</h1>
      <Blogs />
    </div>
  );
};

export default App;
