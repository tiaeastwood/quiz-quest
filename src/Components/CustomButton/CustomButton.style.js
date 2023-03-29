import { StyleSheet } from "react-native";
import palette from "../../styles/colours";

const getStyles = (screenDimensions) => {
	const isTablet = screenDimensions.width > 1000;

	const styles = StyleSheet.create({
		button: {
			justifyContent: "center",
			alignItems: "center",
			padding: 10,
			borderRadius: 20,
			margin: 5,
		},
		buttonText: {
			fontWeight: "bold",
			textTransform: "uppercase",
			fontSize: isTablet ? 20 : 14,
		},
	});
	return styles;
};

export default getStyles;
