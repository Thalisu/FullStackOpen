const CreateNew = () => {
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form>
        <div>
          content
          <input name="content" />
        </div>
        <div>
          author
          <input name="author" />
        </div>
        <div>
          url for more info
          <input name="info" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};
export default CreateNew;
