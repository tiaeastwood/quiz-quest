import { StyleSheet } from "react-native";
import palette from "../../styles/colours";

const getStyles = (screenDimensions) => {
	const isTablet = screenDimensions.width > 1000;

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "transparent",
		},
		subtitle: {
			fontWeight: "bold",
			fontSize: isTablet ? 30 : 20,
			color: palette.background,
			marginBottom: 5,
		},
		endTitle: {
			fontWeight: "bold",
			fontSize: isTablet ? 40 : 20,
			color: palette.background,
		},
		scoreAnnouncement: {
			fontWeight: "bold",
			fontSize: isTablet ? 60 : 30,
			color: palette.offWhite,
		},
		awardImg: {
			width: 150,
			height: 200,
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
			width: "100%",
			padding: 20,
			marginBottom: -40,
		},
		reviewAnswer: {
			fontSize: isTablet ? 20 : 14,
			marginVertical: 5,
		},
		buttonContainer: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
	});
	return styles;
};

export default getStyles;
