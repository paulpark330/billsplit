import { Image, Pressable, StyleSheet } from "react-native";

const Card = () => {
  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/bill-icon.png")}
      />
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
  },
  image: {
    width: 100,
    height: 100,
    padding: 18,
  },
});
