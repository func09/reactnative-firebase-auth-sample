import { View, Text } from "react-native";
import useAuth from "../hooks/useAuth";

const Logged = () => {
  const currentUser = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Logged</Text>
      <Text>{currentUser.uid}</Text>
    </View>
  );
};

export default Logged;
