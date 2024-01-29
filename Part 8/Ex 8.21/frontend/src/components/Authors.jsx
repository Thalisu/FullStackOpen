import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../queries";

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS);
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [editAuthorBorn] = useMutation(EDIT_AUTHOR, {
    onError: (error) => {
      const messages = error.graphQLErrors.map((e) => e.message).join("\n");
      console.log(messages);
    },
    update: (cache, response) => {
      cache.updateQuery({ query: ALL_AUTHORS }, ({ allAuthors }) => {
        return {
          allAuthors: allAuthors.concat(response.data.editAuthor),
        };
      });
    },
  });

  if (!props.show) {
    return null;
  }

  if (result.loading) {
    return <div>loading...</div>;
  }

  const authors = result.data.allAuthors;

  const submit = async (event) => {
    event.preventDefault();
    editAuthorBorn({ variables: { name, setBornTo: born } });
    setBorn("");
    setName("");
  };

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {props.token && (
        <>
          <h2>Set Birthyear</h2>
          <div>
            <form onSubmit={submit}>
              <div>
                name
                <select>
                  {authors.map((a) => (
                    <option
                      value={a.name}
                      key={a.name}
                      onClick={({ target }) => setName(target.value)}
                    >
                      {a.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                born
                <input
                  value={born}
                  onChange={({ target }) => setBorn(Number(target.value))}
                />
              </div>
              <button type="submit">update author</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Authors;
