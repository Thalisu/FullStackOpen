import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderBy) => {
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: orderBy,
  });

  const repositories =
    loading || data.repositories.edges.map((edge) => edge.node);

  return { repositories, loading };
};

export default useRepositories;
