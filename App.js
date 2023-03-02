import React from "react";
import AppLoading from "expo-app-loading";
import Navigation from "./src/routes/RouteContainer";
import * as SplashScreen from "expo-splash-screen";

import { useFonts, Blaka_400Regular } from "@expo-google-fonts/dev";

SplashScreen.preventAutoHideAsync();

const App = () => {
	let [fontsLoaded] = useFonts({
		Blaka_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return <Navigation />;
	}
};

export default App;
