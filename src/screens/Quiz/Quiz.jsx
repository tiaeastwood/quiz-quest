import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
	Text,
	SafeAreaView,
	ActivityIndicator,
	View,
	FlatList,
	Image,
} from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import { useQuizContext } from "../../context/QuizContext.jsx";
import awardImg from "../../assets/images/award.png";
import ResultItem from "../../Components/ResultItem/ResultItem.jsx";

import styles from "./Quiz.style.js";
import { getTrueFalseQuestions } from "../../api/quiz.js";

const Quiz = ({ route }) => {
	const [questionNum, setQuestionNum] = useState(0);
	const [questions, setQuestions] = useState();
	const [answers, setAnswers] = useQuizContext();
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
			result: result ? "Correct" : "Incorrect",
		};

		if (result === true) {
			count++;
		}

		setScore(count);
		setAnswers([...answers, { ...log }]);
		goToNextQuestion();
	};

	const goToNextQuestion = () => {
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
								type="primary"
							/>
						))}
					</View>
					<View style={styles.buttonContainer}>
						<CustomButton
							buttonText="End Quiz"
							onPress={() => navigation.navigate("Finish")}
							type="secondary"
						/>
					</View>
				</View>
			) : (
				<View style={styles.resultContainer}>
					<Text style={styles.endTitle}>All questions answered!</Text>
					<Text style={styles.scoreAnnouncement}>
						You scored {score} out of {route.params.numQuestions}
					</Text>

					<Image source={awardImg} alt="trophy" style={styles.awardImg} />

					<View style={styles.listContainer}>
						<Text style={styles.subtitle}>Review your answers:</Text>
						<FlatList
							data={answers}
							renderItem={({ item }) => (
								<ResultItem questions={questions} item={item} />
							)}
							keyExtractor={(item) => item.q}
						/>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
};

export default Quiz;
