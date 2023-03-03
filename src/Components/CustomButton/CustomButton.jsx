import { Text, Pressable } from "react-native";
import styles from "./CustomButton.style";
import palette from "../../styles/colours";

const CustomButton = ({ buttonText, onPress, width, disabled, type }) => {

	return (
		<Pressable
			style={[
				styles.button,
				{
					width: width || "auto",
					backgroundColor: disabled ? palette.grey : palette[type],
				},
			]}
			onPress={onPress}
			disabled={disabled}
		>
			<Text
				style={[styles.buttonText, { color: disabled ? "black" : "white" }]}
			>
				{buttonText}
			</Text>
		</Pressable>
	);
};

export default CustomButton;
