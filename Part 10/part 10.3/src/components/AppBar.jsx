import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Text from "./Text";

import theme from "../theme";
import { useQuery } from "@apollo/client";
import { CURRENT_USER } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: theme.colors.navBarColor,
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

const SignIn = () => {}

const AppBar = () => {
  const { loading, data } = useQuery(CURRENT_USER, {
    fetchPolicy: "cache-and-network",
  });

  const signInText = loading ? "Sign in" : data.me ? "Sign Out" : "Sign in";

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Link to="/signIn" style={styles.button}>
          <Text fontWeight="bold" fontSize="subheading">
            {signInText}
          </Text>
        </Link>
        <Link to="/" style={styles.button}>
          <Text fontWeight="bold" fontSize="subheading">
            Repositories
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
