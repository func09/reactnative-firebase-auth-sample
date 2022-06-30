import { useState, useRef, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const Guest = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);

  const registerUser = async () => {
    setLoading(true);
    const response = await signInAnonymously(getAuth());
    if (mounted.current) {
      setLoading(false);
    }
  };

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const onPress = async () => {
    await registerUser();
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Guest</Text>
        <Button title="Login" onPress={onPress} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Guest;
