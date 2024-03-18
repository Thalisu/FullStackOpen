import { useParams } from "react-router-native";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import Text from "../Text";

import useRepository from "../../hooks/useRepository";
import RepositoryItem from "../repositories/RepositoryItem";
import theme from "../../theme";

import * as Linking from "expo-linking";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    paddingBottom: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.buttonBackground,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  separator: {
    height: 10,
    backgroundColor: theme.colors.backgroundColor,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  const { id } = useParams();
  const { repository, loading, fetchMore } = useRepository({
    repositoryId: id,
    first: 4,
  });
  if (loading) return <Text>Loading...</Text>;

  const handlePress = () => {
    Linking.openURL(repository.url);
  };

  const reviews = repository.reviews.edges.map((r) => r.node);

  const onEndReach = () => {
    console.log("aiaaa");
    fetchMore();
  };

  return (
    <>
      <View style={styles.Container}>
        <RepositoryItem item={repository} />
        <Pressable style={styles.button} onPress={() => handlePress()}>
          <Text fontSize={"subheading"} fontWeight={"bold"}>
            Open in GitHub
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem item={item} />}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.2}
      />
    </>
  );
};

export default Repository;
