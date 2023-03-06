import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Finish from "../screens/Finish/Finish";
import Quiz from "../screens/Quiz/Quiz";
import Starter from "../screens/Starter/Starter";
import palette from "../styles/colours";

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
			<Stack.Screen
				name="Quiz"
				component={Quiz}
				options={{
					headerStyle: {
						backgroundColor: palette.primary,
					},
					headerTintColor: palette.offWhite,
				}}
			/>
			<Stack.Screen
				name="Finish"
				component={Finish}
				options={{
					headerShown: false,
					headerStyle: {
						backgroundColor: palette.primary,
					},
					headerTintColor: palette.offWhite,
				}}
			/>
		</Stack.Navigator>
	);
};

export default AppContainer;
