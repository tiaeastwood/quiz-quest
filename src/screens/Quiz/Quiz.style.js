import { StyleSheet } from "react-native";
import palette from "../../styles/colours";

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: palette.background,
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
		fontSize: 24,
		color: palette.primary,
	},
	question: {
		fontSize: 14,
		color: palette.offBlack,
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

export default styles;
