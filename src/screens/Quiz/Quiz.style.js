import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  gameContainer: {
    height: "75%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  bold: {
    fontWeight: "bold",
  },
  question: {
    fontSize: 12,
  },
  answerHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    alignSelf: "center",
  },
});

export default styles;
