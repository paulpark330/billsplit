import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NewGroupForm from "../../components/NewGroup/NewGroupForm";
import Button from "../../components/UI/Button";

const NewGroup = () => {
  const [formIsActive, setFormIsActive] = useState(false);

  const handleStartNewGroup = () => {
    setFormIsActive(true);
  };

  return (
    <View style={styles.container}>
      {formIsActive ? (
        <NewGroupForm />
      ) : (
        <View>
          <Text>Create a new group!</Text>
          <Button onPress={handleStartNewGroup}>Create a New Group</Button>
        </View>
      )}
    </View>
  );
};

export default NewGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
