import { useQuery, useApolloClient } from "@apollo/client";
import useAuthStorage from "../../hooks/useAuthStorage";

import { CURRENT_USER } from "../../graphql/queries";

import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Text from "../Text";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

const SignInOut = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const { loading, data } = useQuery(CURRENT_USER, {
    fetchPolicy: "cache-and-network",
  });

  const handlePress = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return loading ? (
    <Link to="/signIn" style={styles.button}>
      <Text fontWeight="bold" fontSize="subheading">
        Sign In
      </Text>
    </Link>
  ) : data.me ? (
    <Pressable onPress={() => handlePress()} style={styles.button}>
      <Text fontWeight="bold" fontSize="subheading">
        Sign Out
      </Text>
    </Pressable>
  ) : (
    <Link to="/signIn" style={styles.button}>
      <Text fontWeight="bold" fontSize="subheading">
        Sign In
      </Text>
    </Link>
  );
};

export default SignInOut;
