import { FlatList, View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { Picker } from "@react-native-picker/picker";

import useRepositories from "../../hooks/useRepositories";

import RepositoryItem from "./RepositoryItem";
import theme from "../../theme";
import { useState } from "react";

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
  const [orderBy, setOrderBy] = useState({
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  });
  const { repositories, loading } = useRepositories(orderBy);

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={orderBy}
        onValueChange={(itemValue) => setOrderBy(itemValue)}
      >
        <Picker.Item
          label="Highest rated repositories"
          value={{ orderBy: "RATING_AVERAGE", orderDirection: "DESC" }}
        />
        <Picker.Item
          label="Lowest rated repositories"
          value={{ orderBy: "RATING_AVERAGE", orderDirection: "ASC" }}
        />
      </Picker>
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
