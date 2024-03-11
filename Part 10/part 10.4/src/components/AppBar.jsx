import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Text from "./Text";

import theme from "../theme";
import SignInOut from "./SignInOut";

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

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SignInOut />
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
