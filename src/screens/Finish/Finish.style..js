import { StyleSheet } from "react-native";
import palette from "../../styles/colours";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "transparent",
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		color: palette.primary,
	},
	subtitle: {
		fontWeight: "bold",
		fontSize: 20,
		color: palette.background,
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
		marginVertical: 5,
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

export default styles;
