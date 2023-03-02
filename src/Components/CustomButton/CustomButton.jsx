import { Text, TouchableOpacity } from "react-native";
import styles from "./CustomButton.style";

const CustomButton = ({ buttonText, onPress, width }) => {

	return (
		<TouchableOpacity
			style={[styles.button, { width: width || "auto" }]}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>{buttonText}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
