import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
  Button,
} from "react-native";

import styles from "./Quiz.style.js";
import { getTrueFalseQuestions } from "../../api/quiz.js";

const Quiz = () => {
  const [questions, setQuestions] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const fetchedQuestions = await getTrueFalseQuestions();
    setQuestions(fetchedQuestions);
  };

  if (!questions) return <ActivityIndicator />;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.gameContainer}>
        <Text style={styles.bold}>Question 1:</Text>
        <Text style={styles.question}>{questions[0].question}</Text>
        <View style={styles.answerHolder}>
          <Text style={styles.question}>{questions[0].answers[0]}</Text>
          <Text style={styles.question}>{questions[0].answers[1]}</Text>
        </View>
        <Text>Correct answer is {questions[0].correctAnswer}</Text>
        <Button
          title="End quiz"
          onPress={() => navigation.navigate("Finish")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
