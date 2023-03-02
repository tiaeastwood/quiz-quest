import { Text, TouchableOpacity } from "react-native";
import styles from "./CustomButton.style";

const CustomButton = ({ buttonText, onPress }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{buttonText}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
