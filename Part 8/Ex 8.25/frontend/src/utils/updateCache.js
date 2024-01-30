const updateCache = (cache, query, addedBook) => {
  const uniqByName = (a) => {
    let seen = new Set();
    return a.filter((item) => {
      let k = item.title;
      return seen.has(k) ? false : seen.add(k);
    });
  };

  cache.updateQuery({ query, variables: { genre: null } }, (data) => ({
    allBooks: uniqByName(data.allBooks.concat(addedBook)),
  }));
};
export default updateCache;
