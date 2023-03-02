import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import quizCat from "../../assets/images/quizcat.png";

import styles from "./Starter.style.js";

const Starter = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				<View>
					<Text style={styles.titleText}>QUIZ QUEST</Text>
				</View>
				<CustomButton
					buttonText="start"
					onPress={() => navigation.navigate("Quiz")}
				/>
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
