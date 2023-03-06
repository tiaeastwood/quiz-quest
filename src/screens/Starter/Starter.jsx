import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import quizCat from "../../assets/images/quizcat.png";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import palette from "../../styles/colours.js";
import { useQuizContext } from "../../context/QuizContext.jsx";

import styles from "./Starter.style.js";

const numberOfQuestions = ["10", "20", "30", "40", "50"];
const questionTypes = ["True or False", "Multiple Choice"];

const Starter = () => {
	const { numQuestions, questionType } = useQuizContext();
	const [num, setNum] = numQuestions;
	const [type, setType] = questionType;

	const navigation = useNavigation();

	const canStart = num !== "" && type !== "";

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				<MaskedView
					style={{ flex: 0.5, flexDirection: "row", height: "100%" }}
					maskElement={
						<View
							style={{
								// Transparent background because mask is based off alpha channel.
								backgroundColor: "transparent",
								flex: 1,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text style={styles.titleText}>QUIZ QUEST</Text>
						</View>
					}
				>
					{/* Shows behind the mask, you can put anything here, such as an image */}
					<LinearGradient
						colors={[palette.primary, palette.accent]}
						start={{ x: 0, y: 1 }}
						end={{ x: 0, y: 0.33 }}
						style={{ flex: 1 }}
					/>
				</MaskedView>

				<View>
					<Text style={styles.subtitle}>
						Choose number of questions: {numQuestions}
					</Text>
					<View style={styles.buttonsContainer}>
						{numberOfQuestions.map((option, index) => (
							<CustomButton
								key={`${option}-${index}`}
								buttonText={option}
								onPress={() => setNum(option)}
								type="primary"
							/>
						))}
					</View>

					<View>
						<Text style={styles.subtitle}>
							Choose type of questions: {questionType}
						</Text>
						<View style={styles.buttonsContainer}>
							{questionTypes.map((q, index) => (
								<CustomButton
									key={`${q}-${index}`}
									buttonText={q}
									onPress={() => setType(q)}
									type="primary"
								/>
							))}
						</View>
					</View>
				</View>

				<View>
					<CustomButton
						buttonText="start"
						onPress={() => navigation.navigate("Quiz")}
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
