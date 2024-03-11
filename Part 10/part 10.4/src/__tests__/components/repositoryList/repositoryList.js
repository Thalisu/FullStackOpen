import { FlatList, View, Text } from "react-native";

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem">
      <Text testID="fullName">{item.fullName}</Text>
      <Text testID="description">{item.description}</Text>
      <Text testID="language">{item.language}</Text>
      <Text testID="forksCount">{item.forksCount}</Text>
      <Text testID="stargazersCount">{item.stargazersCount}</Text>
      <Text testID="ratingAverage">{item.ratingAverage}</Text>
      <Text testID="reviewCount">{item.reviewCount}</Text>
    </View>
  );
};
