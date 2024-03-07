import { View, StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const RepositoryDetails = ({ item }) => {
  const formatNum = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };

  return (
    <View style={styles.rowContainer}>
      <View style={{ alignItems: "center" }}>
        <Text color="tertiary" fontSize="subheading" fontWeight="bold">
          {formatNum(item.stargazersCount)}
        </Text>
        <Text color={"textSecondary"}>Stars</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text color="tertiary" fontSize="subheading" fontWeight="bold">
          {formatNum(item.forksCount)}
        </Text>
        <Text color={"textSecondary"}>Forks</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text color="tertiary" fontSize="subheading" fontWeight="bold">
          {formatNum(item.reviewCount)}
        </Text>
        <Text color={"textSecondary"}>Reviews</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text color="tertiary" fontSize="subheading" fontWeight="bold">
          {formatNum(item.ratingAverage)}
        </Text>
        <Text color={"textSecondary"}>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryDetails;
