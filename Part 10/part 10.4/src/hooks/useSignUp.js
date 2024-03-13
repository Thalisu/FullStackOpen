import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [signUp, result] = useMutation(CREATE_USER);

  const handleSignUp = async (username, password) => {
    const user = { username, password };
    const { data } = await signUp({ variables: { user } });

    return data;
  };

  return [handleSignUp, result];
};

export default useSignUp;
