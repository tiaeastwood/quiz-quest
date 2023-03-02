import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, ActivityIndicator, View } from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import { useQuizContext } from "../../context/QuizContext.jsx";

import styles from "./Quiz.style.js";
import { getTrueFalseQuestions } from "../../api/quiz.js";

const Quiz = ({ route }) => {
	const [questionNum, setQuestionNum] = useState(0);
	const [questions, setQuestions] = useState();
	const [answers, setAnswers] = useQuizContext();
	const [answered, setAnswered] = useState(false);
	const [score, setScore] = useState(0);
	const navigation = useNavigation();

	const fetchQuestions = async () => {
		const fetchedQuestions = await getTrueFalseQuestions(
			route.params.numOfQuestions,
		);
		setQuestions(fetchedQuestions);
	};

	const saveAnswer = (answer) => {
		let count = score;
		const result =
			answer === questions[questionNum].correctAnswer ? true : false;

		let log = {
			q: questionNum,
			a: answer,
			result: result,
		};

		if (result === true) {
			count++;
		}

		setScore(count);
		setAnswers([...answers, { ...log }]);
		setAnswered(true);
	};

	const goToNextQuestion = () => {
		setAnswered(false);
		const nextQuestion = questionNum + 1;
		setQuestionNum(nextQuestion);
	};

	useEffect(() => {
		fetchQuestions();
	}, []);

	if (!questions) return <ActivityIndicator />;

	return (
		<SafeAreaView style={styles.mainContainer}>
			{questionNum < route.params.numQuestions ? (
				<View style={styles.gameContainer}>
					<Text style={styles.title}>Question {questionNum + 1}</Text>
					<Text style={styles.question}>{questions[questionNum].question}</Text>
					<View style={styles.buttonContainer}>
						{questions[questionNum].answers.map((answer, index) => (
							<CustomButton
								key={`${answer}-${index}`}
								buttonText={answer}
								onPress={() => saveAnswer(answer)}
							/>
						))}
					</View>

					{answered && (
						<View>
							<Text>You answered: {answers[questionNum].a}</Text>
							<Text>
								Correct answer is: {questions[questionNum].correctAnswer}
							</Text>
						</View>
					)}

					<View style={styles.buttonContainer}>
						<CustomButton
							buttonText="End Quiz"
							onPress={() => navigation.navigate("Finish")}
						/>
						<CustomButton
							buttonText="Next question"
							onPress={() => goToNextQuestion()}
						/>
					</View>
				</View>
			) : (
				<View>
					<Text>All questions answered!</Text>
					<Text>
						You scored {score} out of {route.params.numQuestions}
					</Text>
				</View>
			)}
		</SafeAreaView>
	);
};

export default Quiz;
