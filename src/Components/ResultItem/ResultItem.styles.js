import { StyleSheet } from "react-native";
import palette from "../../styles/colours";

const getStyles = (screenDimensions) => {
	const isTablet = screenDimensions.width > 1000;

	const styles = StyleSheet.create({
		container: {
			backgroundColor: palette.offWhite,
			marginVertical: 5,
			padding: 10,
			borderRadius: 20,
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		bold: {
			fontWeight: "bold",
		},
		reviewAnswer: {
			marginVertical: 5,
		},
		textArea: {
			flex: 0.8,
		},
		text: {
			fontSize: isTablet ? 20 : 14,
			marginVertical: 2.5,
		},
		icon: {
			flex: 0.2,
			flexDirection: "row",
			justifyContent: "flex-end",
		},
	});
	return styles;
};

export default getStyles;
