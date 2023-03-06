import React, { useState, useContext } from "react";

const QuizContext = React.createContext();

export const useQuizContext = () => {
	return useContext(QuizContext);
};

export const QuizProvider = ({ children }) => {
	const [questions, setQuestions] = useState();
	const [answers, setAnswers] = useState([]);
	const [num, setNum] = useState(10);
	const [type, setType] = useState("");
	const [count, setCount] = useState(0);

	return (
		<QuizContext.Provider
			value={{
				quizQuestions: [questions, setQuestions],
				recordedAnswers: [answers, setAnswers],
				numQuestions: [num, setNum],
				questionType: [type, setType],
				counter: [count, setCount],
			}}
		>
			{children}
		</QuizContext.Provider>
	);
};
