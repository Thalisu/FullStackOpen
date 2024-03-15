import { FlatList, View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { Picker } from "@react-native-picker/picker";
import { Searchbar } from "react-native-paper";

import useRepositories from "../../hooks/useRepositories";

import RepositoryItem from "./RepositoryItem";
import theme from "../../theme";
import { useState } from "react";
import { useDebounce } from "use-debounce";

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
  const [orderDirection, setOrderDirection] = useState();
  const [search, setSearch] = useState("");
  const [filter] = useDebounce(search, 500);
  const { repositories, loading } = useRepositories(orderDirection, filter);

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Searchbar placeholder="Search" onChangeText={setSearch} value={search} />
      <Picker
        selectedValue={orderDirection}
        onValueChange={(itemValue) => setOrderDirection(itemValue)}
      >
        <Picker.Item label="Highest rated repositories" value="DESC" />
        <Picker.Item label="Lowest rated repositories" value="ASC" />
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
