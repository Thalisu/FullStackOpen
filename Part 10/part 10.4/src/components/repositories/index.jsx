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
  const [searchKeyword] = useDebounce(search, 500);
  const { repositories, loading, fetchMore } = useRepositories({
    orderBy: "RATING_AVERAGE",
    orderDirection,
    searchKeyword,
    first: 5,
  });

  if (loading) return <Text>Loading...</Text>;

  const onEndReach = () => {
    fetchMore();
  };

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
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default RepositoryList;
