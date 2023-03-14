export const initialState = {
	quizQuestions: [],
	recordedAnswers: [],
	numQuestions: 10,
	questionType: "",
	counter: 0,
};

export const quizReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "UPDATE_QUESTIONS":
			return {
				...state,
				quizQuestions: payload.quizQuestions,
			};
		case "ADD_ANSWER":
			return {
				...state,
				recordedAnswers: payload.recordedAnswers,
			};
		case "UPDATE_NUM_QUESTIONS":
			return {
				...state,
				numQuestions: payload.numQuestions,
			};
		case "UPDATE_QUESTION_TYPE":
			return {
				...state,
				questionType: payload.questionType,
			};
		case "UPDATE_COUNTER":
			return {
				...state,
				counter: payload.counter,
			};
		case "RESET_ANSWERS":
			return {
				...state,
				recordedAnswers: payload.recordedAnswers,
				counter: payload.counter,
			};
		case "RESET_QUIZ":
			return {
				...state,
				quizQuestions: payload.quizQuestions,
				recordedAnswers: payload.recordedAnswers,
				numQuestions: payload.numQuestions,
				questionType: payload.questionType,
				counter: payload.counter,
			};
		default:
			throw new Error(`No case for type ${type} found in quizReducer`);
	}
};
