import { useState } from "react";
import store from "./reducers/counterReducer";
import "./App.css";
function App() {
  const [feedback, setFeedback] = useState(store.getState());
  store.subscribe(() => {
    setFeedback(store.getState());
  });
  return (
    <>
      <div className="card">
        <button onClick={() => stateUpdate("GOOD")}>good</button>
        <button onClick={() => stateUpdate("OK")}>ok</button>
        <button onClick={() => stateUpdate("BAD")}>bad</button>
        <button onClick={() => stateUpdate("ZERO")}>RESET</button>
        <p>good: {feedback.good}</p>
        <p>ok: {feedback.ok}</p>
        <p>bad: {feedback.bad}</p>
      </div>
    </>
  );
}

const stateUpdate = (type) => {
  store.dispatch({ type: type });
};

export default App;
