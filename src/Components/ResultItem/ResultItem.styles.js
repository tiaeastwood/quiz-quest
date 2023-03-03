import { StyleSheet } from "react-native";
import palette from "../../styles/colours";

const styles = StyleSheet.create({
	container: {
        backgroundColor: palette.offWhite,
        marginVertical: 5,
        padding: 10,
        borderRadius: 20
	},
	bold: {
		fontWeight: "bold",
	},
	reviewAnswer: {
		marginVertical: 5,
	},
});

export default styles;
