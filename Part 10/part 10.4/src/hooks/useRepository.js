import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (repositoryId) => {
  const { loading, data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { repositoryId },
  });

  const repository = loading || data.repository;

  return { repository, loading };
};

export default useRepository;
