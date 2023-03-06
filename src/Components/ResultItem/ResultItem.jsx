import { Text, View } from "react-native";
import styles from "./ResultItem.styles";
import palette from "../../styles/colours";
import { Entypo } from "@expo/vector-icons";

const ResultItem = ({ questions, item }) => {
	return (
		<View style={styles.container}>
			<View style={styles.textArea}>
				<Text style={styles.text}>
					<Text style={styles.bold}>No.</Text> {item.q + 1}
				</Text>
				<Text style={styles.text}>
					<Text style={styles.bold}>Question:</Text>{" "}
					{questions[item.q].question}
				</Text>
				<Text style={styles.text}>
					<Text style={styles.bold}>You answered:</Text> {item.a}
				</Text>
			</View>
			<View style={styles.icon}>
				{item.result === "Correct" ? (
					<Entypo name="check" size={60} color={palette.accent} />
				) : (
					<Entypo name="cross" size={60} color={palette.secondary} />
				)}
			</View>
		</View>
	);
};

export default ResultItem;
