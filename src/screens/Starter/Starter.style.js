import { StyleSheet } from "react-native";
import palette from "../../styles/colours";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: palette.background,
	},
	innerContainer: {
		flex: 0.5,
		width: "90%",
		alignItems: "center",
		justifyContent: "space-around",
	},
	titleText: {
		fontSize: 90,
		fontWeight: "bold",
		fontFamily: "Blaka_400Regular",
		color: palette.primary,
	},
	subtitle: {
		fontWeight: "bold",
		marginVertical: 10,
		color: palette.primary,
	},
	homeImage: {
		height: 400,
		width: "100%",
		position: "absolute",
		bottom: 0,
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
	},
});

export default styles;
