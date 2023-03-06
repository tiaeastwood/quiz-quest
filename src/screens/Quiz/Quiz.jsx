import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, ActivityIndicator, View } from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import { useQuizContext } from "../../context/QuizContext.jsx";
import GradientWrapper from "../../Components/GradientWrapper/GradientWrapper.jsx";

import styles from "./Quiz.style.js";
import {
	getTrueFalseQuestions,
	getSpecificNumberOfRegularQuestions,
} from "../../api/quiz.js";

const Quiz = () => {
	const {
		quizQuestions,
		recordedAnswers,
		numQuestions,
		questionType,
		counter,
	} = useQuizContext();
	const [questions, setQuestions] = quizQuestions;
	const [answers, setAnswers] = recordedAnswers;
	const [num] = numQuestions;
	const [type] = questionType;
	const [count, setCount] = counter;
	const [selectedOption, setSelectedOption] = useState("");

	const navigation = useNavigation();

	const endOfQuestions = count === num - 1;

	const fetchQuestions = async () => {
		if (type === "True or False") {
			const trueOrFalseQuestions = await getTrueFalseQuestions(num);
			setQuestions(trueOrFalseQuestions);
		} else {
			const regularQuestions = await getSpecificNumberOfRegularQuestions(num);
			setQuestions(regularQuestions);
		}
	};

	const saveAnswer = (answer) => {
		setSelectedOption(answer);

		const result = answer === questions[count].correctAnswer ? true : false;

		let log = {
			q: count,
			a: answer,
			result: result ? "Correct" : "Incorrect",
		};

		setAnswers([...answers, { ...log }]);

		if (!endOfQuestions) {
			goToNextQuestion();
		}
	};

	const goToNextQuestion = () => {
		const nextQuestion = count + 1;
		setCount(nextQuestion);
		setSelectedOption("");
	};

	useEffect(() => {
		setCount(0);
		fetchQuestions();
	}, []);

	if (!questions) return <ActivityIndicator />;

	return (
		<GradientWrapper>
			<SafeAreaView style={styles.mainContainer}>
				<View style={styles.gameContainer}>
					<Text style={styles.title}>Question {count + 1}</Text>
					<Text style={styles.question}>{questions[count].question}</Text>
					<View style={styles.buttonContainer}>
						{questions[count].answers.map((answer, index) => (
							<CustomButton
								key={`${answer}-${index}`}
								buttonText={answer}
								onPress={() => saveAnswer(answer)}
								type="primary"
								fullWidth
							/>
						))}
					</View>
					<View style={styles.buttonContainer}>
						{endOfQuestions && selectedOption !== "" && (
							<CustomButton
								buttonText="Finish"
								onPress={() => navigation.navigate("Finish")}
								type="secondary"
							/>
						)}
					</View>
				</View>
			</SafeAreaView>
		</GradientWrapper>
	);
};

export default Quiz;
