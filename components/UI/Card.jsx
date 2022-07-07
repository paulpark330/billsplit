import { Image, Pressable, View, Text, StyleSheet } from "react-native";
const assets = require("../../utils/assets");

const Card = ({ image, title, description, onPress }) => {
  return (
    <Pressable
    onPress={onPress}
      style={({ pressed }) => [styles.cardContainer, pressed && styles.pressed]}
    >
      <Image style={styles.cardImage} source={assets[image]} />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    marginVertical: 8,
    padding: 20,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardTextContainer: {
    marginLeft: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    width: 200
  },
  pressed: {
    transform: [{ translateY: 4 }],
  },
});
