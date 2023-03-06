
# AND Digital take home React Native task

This is the take home exercise to be completed after the AND digital React Native Learner course. Installation guide is at the bottom.

## Task

I have provided a basic skeleton app with navigation and three screens as well as an API, with examples of it's usage (in Quiz.jsx).

Three REST API calls are pre-written as functions that are given to you in the
src/api/quiz.js 
file:

1 - getTrueFalseQuestions: 10 questions in true/false format

2 - getRegularQuestions: 10 questions in 4 answer format

3 - getSpecificNumberOfRegularQuestions(number): given n => n questions in 4 answer format NOTE: MUST BE LESS THAN 50 questions

### Create an app where:
- Using the function getTrueFalseQuestions, display 10 questions in a paginated view or list/scrollview.
- User can select true or false on the question
- Result is stored (in a context provider, which you will have to create and wrap around the app)
- At the end user is showed which answers were correct, which answers the user guessed and their score
- User can start the quiz again


#### Harder tier:
- Use the second API function to retrieve questions with 4 answers, instead of True/False
- Render the questions with all 4 answers, allow the users to select these answers
- Rest of app should work the same as previous example



#### Even harder tier:
- Using the third API, the user inputs (using either a slider, text input or dropdown) how many questions (up to 50) they want to answer.
- Rest of app works the same as previous exercises.



### If you are struggling or need some inspiration

A similar React Web (not React Native) demo of can be found here using the same api:
https://codesandbox.io/s/b69gw

Trivia API: https://opentdb.com/api_config.php



# Installation guide

It's an expo project so pretty easy to run!

## Run Locally

If you don't have expo, install with:
```bash
npm i -g expo-cli
```

Go to the project directory

```bash
  cd take-home-exercise
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  expo start
```
Then press 'i' or 'a' to open the ios or android simulator

## Authors

- Jess Purvis


---

# Tia's Notes

## Animations
- [Lottie docs](https://airbnb.io/lottie/#/)
- [Lottie files - free animations](https://lottiefiles.com/)
