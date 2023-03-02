import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Finish from "../screens/Finish/Finish";
import Quiz from "../screens/Quiz/Quiz";
import Starter from "../screens/Starter/Starter";

const Stack = createNativeStackNavigator();

const AppContainer = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Starter"
				component={Starter}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name="Quiz" component={Quiz} />
			<Stack.Screen name="Finish" component={Finish} />
		</Stack.Navigator>
	);
};

export default AppContainer;
