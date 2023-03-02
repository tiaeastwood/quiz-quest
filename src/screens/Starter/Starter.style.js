import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#fdf9d9",
	},
	innerContainer: {
		flex: 0.5,
		width: "90%",
		alignItems: "center",
		justifyContent: "space-around",
	},
	titleText: {
		fontSize: 80,
		fontWeight: "bold",
		fontFamily: "Blaka_400Regular",
		color: "#3a8d71",
	},
	subtitle: {
		fontWeight: "bold",
		marginVertical: 10,
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
		backgroundColor: "white",
		color: "black",
	},
	buttonsContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

export default styles;
