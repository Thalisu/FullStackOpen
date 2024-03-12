import { FlatList, View, Text, StyleSheet } from "react-native";

import useRepositories from "../../hooks/useRepositories";

import RepositoryItem from "./RepositoryItem";
import theme from "../../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 20,
    backgroundColor: theme.colors.backgroundColor,
  },
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#fff",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Link to={`/repository/${item.id}`}>
            <RepositoryItem item={item} />
          </Link>
        )}
      />
    </View>
  );
};

export default RepositoryList;
