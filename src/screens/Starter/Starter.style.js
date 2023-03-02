import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#fdf9d9",
	},
	innerContainer: {
		flex: 0.5,
		justifyContent: "space-around",
	},
	titleText: {
		fontSize: 40,
		fontWeight: "bold",
	},
	homeImage: {
		height: 400,
		width: "100%",
		position: "absolute",
		bottom: 0,
	},
});

export default styles;
