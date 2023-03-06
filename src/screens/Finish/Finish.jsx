import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
	Text,
	SafeAreaView,
	FlatList,
	Image,
	View,
	ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import palette from "../../styles/colours.js";
import { useQuizContext } from "../../context/QuizContext.jsx";
import awardImg from "../../assets/images/award.png";
import ResultItem from "../../Components/ResultItem/ResultItem.jsx";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import GradientWrapper from "../../Components/GradientWrapper/GradientWrapper.jsx";

import styles from "./Finish.style.";

const Finish = () => {
	const { quizQuestions, recordedAnswers, numQuestions } = useQuizContext();
	const [questions, setQuestions] = quizQuestions;
	const [answers] = recordedAnswers;
	const [num] = numQuestions;
	const [finalScore, setFinalScore] = useState(null);

	const navigation = useNavigation();

	const getScore = () => {
		let score = 0;
		for (const answer of answers) {
			if (answer.result === "Correct") {
				score++;
			}
		}
		setFinalScore(score);
	};

	useEffect(() => {
		getScore();
	}, []);

	if (finalScore === null) return <ActivityIndicator />;

	return (
		<GradientWrapper>
			<SafeAreaView style={styles.container}>
				<View style={styles.resultContainer}>
					<Text style={styles.endTitle}>All questions answered!</Text>

					<Text style={styles.scoreAnnouncement}>
						You scored {finalScore} out of {num}
					</Text>

					<Image source={awardImg} alt="trophy" style={styles.awardImg} />

					<View style={styles.buttonContainer}>
						<CustomButton
							buttonText="Play Again"
							onPress={() => navigation.navigate("Starter")}
							type="primary"
						/>
						<CustomButton
							buttonText="Quit"
							onPress={() => navigation.navigate("Starter")}
							type="secondary"
						/>
					</View>

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
			</SafeAreaView>
		</GradientWrapper>
	);
};

export default Finish;
