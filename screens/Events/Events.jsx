import { Text, View, Image, StyleSheet } from "react-native";
import Card from "../../components/UI/Card";
import { GlobalStyles } from "../../constants/style";

const Events = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={require("../../assets/bill-icon.png")}
        />
        <Text style={styles.cardText}>New Event</Text>
      </View>
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    padding: 18,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  cardImage: {
    width: 80,
    height: 80,
    padding: 18,
  },
  cardText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
