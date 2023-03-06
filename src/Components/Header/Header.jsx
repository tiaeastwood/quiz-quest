import React from "react";
import { StyleSheet, Text, View, ViewBase } from "react-native";

const Header = ({ title }) => {
	return (
		<View>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerText: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#ffffff",
		letterSpacing: 2,
		marginRight: 20,
		textTransform: "uppercase",
	},
});

export default Header;
