import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import quizCat from "../../assets/images/quizcat.png";

import styles from "./Starter.style.js";

const numberOfQuestions = ["10", "20", "30", "40", "50"];
const questionTypes = ["True or False", "Multiple Choice"];

const Starter = () => {
	const [numQuestions, setNumQuestions] = useState("");
	const [questionType, setQuestionType] = useState("");
	const navigation = useNavigation();

	const canStart = numQuestions !== "" && questionType !== "";

	useEffect(() => {
		setNumQuestions("");
		setQuestionType("");
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				<Text style={styles.titleText}>QUIZ QUEST</Text>

				<View>
					<Text style={styles.subtitle}>
						Number of questions: {numQuestions}
					</Text>
					<View style={styles.buttonsContainer}>
						{numberOfQuestions.map((option, index) => (
							<CustomButton
								key={`${option}-${index}`}
								buttonText={option}
								onPress={() => setNumQuestions(option)}
								type="primary"
							/>
						))}
					</View>

					<View>
						<Text style={styles.subtitle}>
							Type of questions: {questionType}
						</Text>
						<View style={styles.buttonsContainer}>
							{questionTypes.map((q, index) => (
								<CustomButton
									key={`${q}-${index}`}
									buttonText={q}
									onPress={() => setQuestionType(q)}
									type="primary"
								/>
							))}
						</View>
					</View>
				</View>

				<View>
					<CustomButton
						buttonText="start"
						onPress={() =>
							navigation.navigate("Quiz", {
								numQuestions: numQuestions,
								questionType: questionType,
							})
						}
						width={300}
						disabled={!canStart}
						type="secondary"
					/>
				</View>
			</View>
			<Image
				source={quizCat}
				alt="a hero cat on a quest"
				style={styles.homeImage}
			/>
		</SafeAreaView>
	);
};

export default Starter;
