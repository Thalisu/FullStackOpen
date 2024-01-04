import { addVote } from "./slice";
const vote = (content, id, votes) => {
  return async (dispatch) => {
    const toVote = { content, votes: votes + 1 };
    dispatch(addVote(toVote.id));
  };
};
export default { vote };
