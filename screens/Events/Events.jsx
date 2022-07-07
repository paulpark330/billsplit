import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EventsOverview from "./EventsOverview";
import NewBill from "../Bill/NewBill";
import NewEvent from "./NewEvent";

const Stack = createNativeStackNavigator();

const Events = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Events Overview"
        component={EventsOverview}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="NewBill" component={NewBill} />
      <Stack.Screen name="NewEvent" component={NewEvent} />
    </Stack.Navigator>
  );
};

export default Events;
