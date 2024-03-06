import { View, StyleSheet, Image } from "react-native";
import Text from "../Text";
import RepositoryDetails from "./RepositoryDetails";

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  lang: {
    paddingHorizontal: 3,
    paddingVertical: 5,
    backgroundColor: "#0366d6",
    borderRadius: 5,
    color: "#fff",
    width: "max-content",
  },
  listItems: {
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.listItems}>
      <View style={styles.rowContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={{ marginLeft: 20 }}>
          <Text
            color="tertiary"
            fontSize="subheading"
            fontWeight="bold"
            style={{ marginBottom: 1 }}
          >
            {item.fullName}
          </Text>
          <Text color={"textSecondary"} style={{ marginBottom: 3 }}>
            {item.description}
          </Text>
          <View style={{ alignSelf: "flex-start", marginBottom: 5 }}>
            <Text style={styles.lang}>{item.language}</Text>
          </View>
        </View>
      </View>
      <RepositoryDetails item={item} />
    </View>
  );
};

export default RepositoryItem;
