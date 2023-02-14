import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, SafeAreaView, Button } from "react-native";

import styles from "./Finish.style.";

const Finish = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bold}>Welcome to the quiz</Text>
      <Button
        title="Back to start"
        onPress={() => navigation.navigate("Starter")}
      />
    </SafeAreaView>
  );
};

export default Finish;
