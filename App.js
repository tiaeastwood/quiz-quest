import React from "react";
import Navigation from "./src/routes/RouteContainer";
import { QuizProvider } from "./src/context/QuizContext";
import { Text } from "react-native";

import { useFonts, Blaka_400Regular } from "@expo-google-fonts/dev";

const App = () => {
	let [fontsLoaded] = useFonts({
		Blaka_400Regular,
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	} else {
		return (
			<QuizProvider>
				<Navigation />
			</QuizProvider>
		);
	}
};

export default App;
