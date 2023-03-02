import React, { useState, useContext } from "react";

const QuizContext = React.createContext();

export const useQuizContext = () => {
	return useContext(QuizContext);
};

export const QuizProvider = ({ children }) => {
	const [answers, setAnswers] = useState([]);

	return (
		<QuizContext.Provider
			value={[answers, setAnswers]}
		>
			{children}
		</QuizContext.Provider>
	);
};
