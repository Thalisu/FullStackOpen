import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import { useApolloClient } from "@apollo/client";

import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const [signIn, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const handleSignIn = async (username, password) => {
    const credentials = { username, password };
    const { data } = await signIn({ variables: { credentials } });

    await authStorage.setAccessToken(data.authenticate.accessToken);

    apolloClient.resetStore();

    return data;
  };

  return [handleSignIn, result];
};

export default useSignIn;
