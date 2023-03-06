import { StyleSheet } from "react-native";
import palette from "../../styles/colours";

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
		flex: 0.80
	},
	text: {
     marginVertical: 2.5
	},
	icon: {
		flex: 0.20,
		flexDirection: "row",
		justifyContent: "flex-end",
	}
});

export default styles;
