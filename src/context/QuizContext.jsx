import React, { useContext, createContext, useReducer } from "react";
import { initialState, quizReducer } from "./quizReducer";

const QuizContext = createContext(initialState);

export const QuizProvider = ({ children }) => {
	const [state, dispatch] = useReducer(quizReducer, initialState);

	const updateQuestions = (fetchedQuestions) => {
		dispatch({
			type: "UPDATE_QUESTIONS",
			payload: {
				quizQuestions: fetchedQuestions,
			},
		});
	};

	const addAnswer = (answer) => {
		const updatedAnswerArray = state.recordedAnswers.concat(answer);
		dispatch({
			type: "ADD_ANSWER",
			payload: {
				recordedAnswers: updatedAnswerArray,
			},
		});
	};

	const updateNumQuestions = (num) => {
		dispatch({
			type: "UPDATE_NUM_QUESTIONS",
			payload: {
				numQuestions: num,
			},
		});
	};

	const updateQuestionType = (questionType) => {
		dispatch({
			type: "UPDATE_QUESTION_TYPE",
			payload: {
				questionType: questionType,
			},
		});
	};

	const updateCounter = (num) => {
		dispatch({
			type: "UPDATE_COUNTER",
			payload: {
				counter: num,
			},
		});
	};

	const reset = (option) => {
		if (option === "answers") {
			dispatch({
				type: "RESET_ANSWERS",
				payload: {
					recordedAnswers: initialState.recordedAnswers,
					counter: initialState.counter
				},
			});
		} else {
			dispatch({
				type: "RESET_QUIZ",
				payload: {
					quizQuestions: initialState.quizQuestions,
					recordedAnswers: initialState.recordedAnswers,
					numQuestions: initialState.numQuestions,
					questionType: initialState.questionType,
					counter: initialState.counter,
				},
			});
		}
	};

	const value = {
		quizQuestions: state.quizQuestions,
		recordedAnswers: state.recordedAnswers,
		numQuestions: state.numQuestions,
		questionType: state.questionType,
		counter: state.counter,
		updateQuestions,
		addAnswer,
		updateNumQuestions,
		updateQuestionType,
		updateCounter,
		reset,
	};

	return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuizContext = () => {
	const context = useContext(QuizContext);

	if (context === undefined) {
		throw new Error("useQuiz must be used with QuizContext");
	}

	return context;
};
