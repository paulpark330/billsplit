import { Text, View } from "react-native";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const GroupName = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("GroupDetails");
  };

  return (
    <View>
      <Input label="Group Name" />
      <Button onPress={handleNext}>Next</Button>
    </View>
  );
};

export default GroupName;
