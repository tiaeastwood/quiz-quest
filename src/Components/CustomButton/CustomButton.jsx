import { useState } from "react";
import { Text, Pressable } from "react-native";
import styles from "./CustomButton.style";
import palette from "../../styles/colours";

const CustomButton = ({
	fullWidth,
	buttonText,
	width,
	disabled,
	type,
	onPress,
}) => {
	return (
		<Pressable
			style={[
				styles.button,
				{
					width: width || "auto",
					backgroundColor: disabled ? "transparent" : palette[type],
					borderWidth: 2,
					borderColor: palette[type],
					alignSelf: fullWidth ? "stretch" : "center",
				},
			]}
			onPress={onPress}
			disabled={disabled}
		>
			<Text
				style={[
					styles.buttonText,
					{ color: disabled ? palette[type] : "white" },
				]}
			>
				{buttonText}
			</Text>
		</Pressable>
	);
};

export default CustomButton;
