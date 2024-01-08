import { useField, useSubmitHandler } from "../hooks";

const CreateNew = () => {
  const handleSubmit = useSubmitHandler();
  const { reset: resetContent, ...content } = useField("text");
  const { reset: resetAuthor, ...author } = useField("text");
  const { reset: resetInfo, ...info } = useField("text");
  const reset = () => {
    resetContent();
    resetAuthor();
    resetInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={(event) => handleSubmit(event, content, author, info)}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button type="submit">create</button>{" "}
        <button type="reset" onClick={() => reset()}>
          reset
        </button>
      </form>
    </div>
  );
};
export default CreateNew;
