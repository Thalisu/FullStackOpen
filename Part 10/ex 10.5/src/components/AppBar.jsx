import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.navBarColor,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text
          style={{ marginHorizontal: 20 }}
          fontWeight="bold"
          fontSize="subheading"
        >
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
