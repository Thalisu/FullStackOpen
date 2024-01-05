import { Routes, Route, Link } from "react-router-dom";
import {
  AnecdoteList,
  Anecdote,
  CreateNew,
  About,
  Footer,
  Notification,
} from "./components";

const App = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <>
      <h1>Software anecdotes</h1>
      <div>
        <Link to="/" style={padding}>
          anecdotes
        </Link>
        <Link to="/create" style={padding}>
          create new
        </Link>
        <Link to="/about" style={padding}>
          about
        </Link>
        <Notification />
      </div>
      <div></div>
      <Routes>
        <Route path="/" element={<AnecdoteList />} />
        <Route path="/anecdotes/:id" element={<Anecdote />} />
        <Route path="/create" element={<CreateNew />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
