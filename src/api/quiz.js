import { decode } from "html-entities";

export const getTrueFalseQuestions = async (numQuestions) => {
	let num = 10;

	if (numQuestions) {
		num = numQuestions;
	}

	const apiCall = await fetch(
		`https://opentdb.com/api.php?amount=${num.toString()}&type=boolean`,
	);
	const data = await apiCall.json();
	return data.results.map((object, index) => {
		return {
			questionNumber: index,
			question: decodeHtml(object.question),
			answers: object.incorrect_answers.concat(object.correct_answer).sort(),
			correctAnswer: object.correct_answer,
		};
	});
};

export const getRegularQuestions = async () => {
	const apiCall = await fetch("https://opentdb.com/api.php?amount=10");
	const data = await apiCall.json();
	return data.results.map((object, index) => {
		return {
			questionNumber: index,
			question: decodeHtml(object.question),
			answers: object.incorrect_answers.concat(object.correct_answer).sort(),
			correctAnswer: object.correct_answer,
		};
	});
};

export const getSpecificNumberOfRegularQuestions = async (
	numberOfQuestions,
) => {
	const apiCall = await fetch(
		`https://opentdb.com/api.php?amount=${numberOfQuestions}`,
	);
	const data = await apiCall.json();
	return data.results.map((object, index) => {
		return {
			questionNumber: index,
			question: decodeHtml(object.question),
			answers: object.incorrect_answers.concat(object.correct_answer).sort(),
			correctAnswer: object.correct_answer,
		};
	});
};

function decodeHtml(html) {
	return decode(html);
}
