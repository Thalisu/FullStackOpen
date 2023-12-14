const anecdotesAtStart = {
  anec: [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ],
  filter: "ALL",
};

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.anec.map(asObject);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      const id = action.payload.id;
      const toChange = state.find((a) => a.id === id);
      const changed = {
        ...toChange,
        votes: toChange.votes + 1,
      };
      return state.map((anec) => (anec.id !== id ? anec : changed));
    }
    case "NEW_ANEC": {
      const newAnec = {
        content: action.payload.content,
        id: getId(),
        votes: 0,
      };
      return state.concat(newAnec);
    }
    default:
      return state;
  }
};

const addVote = (id) => ({ type: "INCREASE", payload: { id } });

const addAnec = (event) => {
  event.preventDefault();
  const content = event.target.anecInput.value;
  return { type: "NEW_ANEC", payload: { content } };
};
export { addVote, addAnec };
export default reducer;
