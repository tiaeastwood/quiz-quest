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
import Slider from "@react-native-community/slider";
import Pawprint from "../../assets/images/pawprint.png";

const questionTypes = ["True or False", "Multiple Choice"];

const Starter = () => {
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

	const navigation = useNavigation();

	const canStart = num !== "" && type !== "";

	const reset = () => {
		setQuestions();
		setAnswers([]);
		setNum(10);
		setType("");
		setCount(0);
	};

	useEffect(() => {
		reset();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				<MaskedView
					style={{ flex: 1, flexDirection: "row", height: "100%" }}
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

				<View style={styles.optionsContainer}>
					<Text style={styles.subtitle}>
						Choose number of questions: {numQuestions}
					</Text>
					<View style={styles.buttonsContainer}>
						<Slider
							style={{ width: "100%", height: 40 }}
							step={1}
							minimumValue={10}
							maximumValue={50}
							minimumTrackTintColor={palette.primary}
							maximumTrackTintColor={palette.accent}
							onValueChange={setNum}
							thumbImage={Pawprint}
						/>
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

					<CustomButton
						fullWidth
						buttonText="start"
						onPress={() => navigation.navigate("Quiz")}
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
