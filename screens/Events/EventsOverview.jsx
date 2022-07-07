import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import Card from "../../components/UI/Card";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const EventsOverview = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const handleOnPress = (component) => {
    navigation.navigate(component);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.container}
    >
      <Card
        onPress={handleOnPress.bind(this, "NewEvent")}
        image={"eventIcon"}
        title="New Event"
        description="Accumulates all the bills from one event"
      />
      <Card
        onPress={handleOnPress.bind(this, "NewBill")}
        image={"billIcon"}
        title="New Bill"
        description="Great for splitting a single reciept"
      />
    </ScrollView>
  );
};

export default EventsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
