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
		numQuestions,
		questionType,
		updateQuestions,
		addAnswer,
		counter,
		updateCounter,
	} = useQuizContext();

	const [selectedOption, setSelectedOption] = useState("");

	const navigation = useNavigation();

	const endOfQuestions = counter === numQuestions - 1;

	const fetchQuestions = async () => {
		if (questionType === "True or False") {
			const trueOrFalseQuestions = await getTrueFalseQuestions(numQuestions);
			await updateQuestions(trueOrFalseQuestions);
		} else {
			const regularQuestions = await getSpecificNumberOfRegularQuestions(
				numQuestions,
			);
			await updateQuestions(regularQuestions);
		}
	};

	const saveAnswer = (answer) => {
		setSelectedOption(answer);

		addAnswer({ id: counter, answer: answer });

		if (!endOfQuestions) {
			goToNextQuestion();
		} else {
			navigation.navigate("Finish");
		}
	};

	const goToNextQuestion = () => {
		const nextQuestion = counter + 1;
		updateCounter(nextQuestion);
		setSelectedOption("");
	};

	useEffect(() => {
		fetchQuestions();
	}, []);

	if (quizQuestions.length === 0) {
		return <ActivityIndicator />;
	} else {
		return (
			<GradientWrapper>
				<SafeAreaView style={styles.mainContainer}>
					<View style={styles.gameContainer}>
						<Text style={styles.title}>Question {counter + 1}</Text>
						<Text style={styles.question}>
							{quizQuestions && quizQuestions[counter].question}
						</Text>
						<View style={styles.buttonContainer}>
							{quizQuestions &&
								quizQuestions[counter].answers.map((answer, index) => (
									<CustomButton
										key={`${answer}-${index}`}
										buttonText={answer}
										onPress={() => saveAnswer(answer)}
										type="primary"
										fullWidth
									/>
								))}
						</View>
					</View>
				</SafeAreaView>
			</GradientWrapper>
		);
	}
};

export default Quiz;
