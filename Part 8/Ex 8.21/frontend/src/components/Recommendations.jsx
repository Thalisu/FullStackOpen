import { useQuery } from "@apollo/client";
import { ALL_BOOKS, ME } from "../queries";
const Recommendations = (props) => {
  const { data: userData } = useQuery(ME);
  const favoriteGenre = userData?.me?.favoriteGenre;
  const result = useQuery(ALL_BOOKS, {
    skip: !favoriteGenre,
    variables: { genre: favoriteGenre },
  });
  if (result.loading) {
    return <div>loading...</div>;
  }

  if (!props.show) {
    return null;
  }

  const books = result.data.allBooks;

  return (
    <div>
      <h2>Recommendations:</h2>
      <p>
        books in your favorite genre <b>patterns</b>
      </p>
      <table>
        <tbody>
          <tr>
            <th>title</th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((b) => (
            <tr key={b.title}>
              <td>{b.title}</td>
              <td>{b.author.name}</td>
              <td>{b.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recommendations;
