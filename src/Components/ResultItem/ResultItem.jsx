import { Text, View } from "react-native";
import styles from "./ResultItem.styles";
import palette from "../../styles/colours";

const ResultItem = ({ questions, item }) => {
	return (
		<View style={styles.container}>
			<Text>
				<Text style={styles.bold}>No.</Text> {item.q + 1}
			</Text>
			<Text>
				<Text style={styles.bold}>Question:</Text> {questions[item.q].question}
			</Text>
			<Text>
				<Text style={styles.bold}>You answered:</Text> {item.a}
			</Text>
			<Text
				style={{
					color:
						item.result === "Correct" ? palette.primary : palette.secondary,
				}}
			>
				{item.result}!
			</Text>
		</View>
	);
};

export default ResultItem;
