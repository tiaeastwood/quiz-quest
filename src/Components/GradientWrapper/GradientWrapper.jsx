import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import palette from "../../styles/colours.js";

const GradientWrapper = ({ children }) => {
	return (
		<View style={styles.wrapper}>
			<LinearGradient
				colors={[palette.primary, palette.accent]}
				start={{ x: 0, y: 1 }}
				end={{ x: 0, y: 0.33 }}
				style={{ flex: 1 }}
			>
				{children}
			</LinearGradient>
		</View>
	);
};

export default GradientWrapper;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});
