import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Groups from "./screens/Groups/Groups";
import Events from "./screens/Events/Events";
import { GlobalStyles } from "./constants/style";

const BottomeTabs = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <BottomeTabs.Navigator screenOptions={{ headerShown: false }}>
            <BottomeTabs.Screen
              name="Groups"
              component={Groups}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="people" color={color} size={size} />
                ),
              }}
            />
            <BottomeTabs.Screen
              name="Events"
              component={Events}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cash" color={color} size={size} />
                ),
              }}
            />
          </BottomeTabs.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: GlobalStyles.colors.white,
  },
});
