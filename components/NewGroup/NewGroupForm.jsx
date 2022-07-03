import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

import GroupName from "./screens/GroupName";
import GroupDetails from "./screens/GroupDetails";


const Stack = createNativeStackNavigator();

const NewGroupForm = () => {
  return (
    <View style={styles.container}>
      <Text>New Group Form</Text>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="GroupName"
          component={GroupName}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="GroupDetails"
          component={GroupDetails}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator> */}
    </View>
  );
};

export default NewGroupForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
