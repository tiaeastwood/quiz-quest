import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useRef } from "react";
import {
	Text,
	SafeAreaView,
	FlatList,
	Image,
	View,
	ActivityIndicator,
} from "react-native";
import { useQuizContext } from "../../context/QuizContext.jsx";
import awardImg from "../../assets/images/award.png";
import ResultItem from "../../Components/ResultItem/ResultItem.jsx";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import GradientWrapper from "../../Components/GradientWrapper/GradientWrapper.jsx";
import LottieView from "lottie-react-native";

import styles from "./Finish.style.";

const Finish = () => {
	const {
		quizQuestions,
		recordedAnswers,
		numQuestions,
		questionType,
		counter,
	} = useQuizContext();
	const [questions, setQuestions] = quizQuestions;
	const [answers, setAnswers] = recordedAnswers;
	const [num, setNum] = numQuestions;
	const [type, setType] = questionType;
	const [count, setCount] = counter;
	const [finalScore, setFinalScore] = useState(null);

	const navigation = useNavigation();
	const animation = useRef(null);

	const getScore = () => {
		let score = 0;
		for (const answer of answers) {
			if (answer.result === "Correct") {
				score++;
			}
		}
		setFinalScore(score);
	};

	const playAgain = () => {
		navigation.navigate("Quiz");
		setCount(0);
		setAnswers([]);
	};

	const quit = () => {
		navigation.navigate("Starter");
		setQuestions();
		setAnswers([]);
		setNum(10);
		setType("");
		setCount(0);
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

					<LottieView
						autoPlay
						ref={animation}
						style={{
							width: 200,
							height: 200,
							backgroundColor: "transparent",
						}}
						// Find more Lottie files at https://lottiefiles.com/featured
						source={require("../../assets/animations/trophy.json")}
					/>

					{/* <Image source={awardImg} alt="trophy" style={styles.awardImg} /> */}

					<View style={styles.buttonContainer}>
						<CustomButton
							buttonText="Play Again"
							onPress={() => playAgain()}
							type="primary"
						/>
						<CustomButton
							buttonText="Quit"
							onPress={() => quit()}
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
