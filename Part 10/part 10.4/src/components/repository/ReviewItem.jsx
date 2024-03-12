import { StyleSheet, View } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    width: "fit-content",
    backgroundColor: "#fff",
    padding: 10,
  },
  review: {
    color: "#000",
  },
  rating: {
    color: "#0366d6",
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: "#0366d6",
    borderRadius: 20,
    textAlign: "center",
    verticalAlign: "middle",
    marginRight: 10,
  },
  contentContainer: {
    flexShrink: 1,
  },
});

const ReviewItem = ({ item }) => {
  return (
    <View style={styles.rowContainer}>
      <View>
        <Text style={styles.rating} fontSize={"subheading"} fontWeight={"bold"}>
          {item.rating}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.review} fontWeight={"bold"}>
          {item.user.username}
        </Text>
        <Text color="textSecondary">
          {item.createdAt.substr(0, 10).replaceAll("-", ".")}
        </Text>
        <Text style={styles.review}>{item.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
