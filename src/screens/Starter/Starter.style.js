import { StyleSheet } from "react-native";
import palette from "../../styles/colours";

const getStyles = (screenDimensions) => {
	const isTablet = screenDimensions.width > 1000;

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: "column",
			justifyContent: "space-between",
			alignItems: "center",
			backgroundColor: palette.background,
		},
		innerContainer: {
			flex: isTablet ? 0.3 : 0.5,
			flexDirection: "column",
			width: isTablet ? "100%" : "90%",
			alignItems: "center",
			justifyContent: "space-around",
		},
		outerOptionsContainer: {
			width: "70%",
			alignItems: "center",
		},
		titleText: {
			fontSize: isTablet ? 140 : 80,
			fontWeight: "bold",
			fontFamily: "Blaka_400Regular",
			color: palette.primary,
		},
		subtitle: {
			fontSize: isTablet ? 20 : 14,
			fontWeight: "bold",
			marginVertical: 10,
			color: palette.primary,
		},
		optionsContainer: {
			width: isTablet ? "60%" : "100%",
			flexDirection: isTablet ? "row" : null,
			justifyContent: "center",
			marginVertical: isTablet ? 10 : 1,
		},
		homeImage: {
			height: isTablet ? "75%" : 400,
			width: "100%",
			position: "absolute",
			bottom: -80,
		},
		input: {
			height: 40,
			margin: 12,
			borderWidth: 1,
			padding: 10,
			borderRadius: 20,
			backgroundColor: palette.offWhite,
			color: "black",
		},
		buttonsContainer: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			marginBottom: 5,
			marginLeft: isTablet ? 110 : 0,
		},
		sliderContainer: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			marginBottom: 5,
		},
		slider: {
			width: "90%",
			height: 40,
		},
	});
	return styles;
};

export default getStyles;
