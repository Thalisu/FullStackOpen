import { View, StyleSheet } from "react-native";

import RepositoryList from "./repositories/RepositoryList";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flex: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
