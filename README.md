
# ⚔️ QUIZ QUEST 🐱

QUIZ QUEST is an app I built using React Native (expo) as an upskilling project.
I was provided with a basic skeleton app and some pre-written functions containing API calls. 

## Index
- [The Brief](#brief)
- [Tech](#tech)
- [Process](#process)
- [Screenshots](#screenshots)


## Brief

- Create an quiz app that can display a selected number of either "true or false" or "multiple choice" questions.
- Must be able to see score at the end of the quiz, as well as see what answers we gave and if they were correct.
- Use a context to store quiz data


## Tech
- React Native with Expo
- Animation: [Lottie](https://airbnb.io/lottie/#/) [Lottie files](https://lottiefiles.com/)
- Number picker slider: [@react-native-community/slider](https://www.npmjs.com/package/@react-native-community/slider)
- Gradients: [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- [@react-native-masked-view/masked-view
](https://www.npmjs.com/package/@react-native-masked-view/masked-view) (to assist with gradient text)
- [Expo Google Fonts](https://github.com/expo/google-fonts)
- Home screen illustration created with [Midjourney](https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F)

## Process
I created a quizContext to hold all the information that my components would need to access during the user journey. This is the first time I've tried [useReducer](https://beta.reactjs.org/reference/react/useReducer) with [context](https://reactjs.org/docs/context.html), which I felt compelled to try in order to keep the context from getting out of hand. [This Youtube tutorial](https://www.youtube.com/watch?v=awGFsGc9oCM&ab_channel=DesignCode) was a great help in understanding that!

As well as completing the tasks provided in the brief, I spent some time designing an attractive frontend for the app. I'd been playing around with Midjourney for a little while, so I used this to generate the initial illustration, then I created a colour theme around it. I also tried out implementing animations for the time in a React Native app, which I achieved using [Lottie](https://airbnb.io/lottie/#/) and now I really want to try more!


## Screenshots

<table>
  <tr>
    <td><img src="./src/assets/screenshots/screenshot1.png" height="530"  alt="home screen"></td>
    <td><img src="./src/assets/screenshots/screenshot2.png" height="530" alt="quiz screen"></td>
    <td><img src="./src/assets/screenshots/screenshot3.png" height="530" alt="results screen"></td>
  </tr>
</table>


---


Trivia API: [https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)


