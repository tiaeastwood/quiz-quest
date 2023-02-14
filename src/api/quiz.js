export const getTrueFalseQuestions = async () => {
    const apiCall = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
    const data = await apiCall.json()
    return data.results.map((object, index) => {
      return {
        questionNumber: index,
        question: object.question,
        answers: object.incorrect_answers.concat(object.correct_answer).sort(),
        correctAnswer: object.correct_answer,
      }
    }) as Array<QuizQuestion>
  }

  export const getRegularQuestions = async () => {
    const apiCall = await fetch('https://opentdb.com/api.php?amount=10')
    const data = await apiCall.json()
    return data.results.map((object, index) => {
      return {
        questionNumber: index,
        question: object.question,
        answers: object.incorrect_answers.concat(object.correct_answer).sort(),
        correctAnswer: object.correct_answer,
      }
    }) as Array<QuizQuestion>
  }


  export const getSpecificNumberOfRegularQuestions = async (numberOfQuestions: number) => {
    const apiCall = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}`)
    const data = await apiCall.json()
    return data.results.map((object, index) => {
      return {
        questionNumber: index,
        question: object.question,
        answers: object.incorrect_answers.concat(object.correct_answer).sort(),
        correctAnswer: object.correct_answer,
      } 
    }) as Array<QuizQuestion>
  }

  export type QuizQuestion = {
    questionNumber: Number,
    question: string,
    answers: Array<String>,
    correctAnswer: String
  }
