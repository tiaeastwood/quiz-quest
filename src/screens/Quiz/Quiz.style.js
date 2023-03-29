import { StyleSheet } from "react-native";
import palette from "../../styles/colours";

const getStyles = (screenDimensions) => {
	const isTablet = screenDimensions.width > 1000;

	const styles = StyleSheet.create({
		mainContainer: {
			flex: 1,
			height: "100%",
			width: "100%",
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "transparent",
		},
		gameContainer: {
			width: "80%",
			height: "75%",
			alignItems: "center",
			justifyContent: "space-evenly",
			paddingHorizontal: 20,
			backgroundColor: "rgba(255, 255, 255, 0.9)",
			borderRadius: 20,
		},
		title: {
			fontWeight: "bold",
			fontSize: isTablet ? 50 : 24,
			color: palette.primary,
		},
		subtitle: {
			fontWeight: "bold",
			fontSize: 20,
			color: palette.offBlack,
			marginBottom: 5,
		},
		endTitle: {
			fontWeight: "bold",
			fontSize: 20,
			color: palette.background,
		},
		scoreAnnouncement: {
			fontWeight: "bold",
			fontSize: 30,
			color: palette.offWhite,
		},
		awardImg: {
			width: 200,
			height: 250,
			resizeMode: "contain",
		},
		bold: {
			fontWeight: "bold",
		},
		resultContainer: {
			flex: 1,
			marginTop: 20,
			alignItems: "center",
			width: "100%",
		},
		listContainer: {
			flex: 1,
			marginTop: 10,
			backgroundColor: palette.background,
			width: "100%",
			padding: 20,
			marginBottom: -40,
		},
		reviewAnswer: {
			marginVertical: 5,
		},
		question: {
			fontSize: isTablet ? 28 : 16,
			color: palette.offBlack,
		},
		buttonContainer: {
			justifyContent: "center",
			alignItems: "center",
			width: "100%"
		},
	});
	return styles
}

export default getStyles;
