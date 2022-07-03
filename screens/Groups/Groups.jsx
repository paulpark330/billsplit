import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NewGroup from "./NewGroup";
import AllGroups from "./AllGroups";
import JoinGroup from "./JoinGroup";
import { GlobalStyles } from "../../constants/style";

const Drawer = createDrawerNavigator();

const Groups = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: GlobalStyles.colors.white },
        tabBarActiveTintColor: GlobalStyles.colors.primary500,
      }}
    >
      <Drawer.Screen
        name="AllGroups"
        component={AllGroups}
        options={{
          title: "My Groups",
          tabBarLabel: "My Groups",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="NewGroup"
        component={NewGroup}
        options={{
          title: "New Group",
          tabBarLabel: "New Group",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-add" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="JoinGroup"
        component={JoinGroup}
        options={{
          title: "Join",
          tabBarLabel: "Join",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="enter" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Groups;
