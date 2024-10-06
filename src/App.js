import React, { useEffect } from 'react';
import Header from './component/Header';
import StartScreen from './component/StartScreen';
import useQuizReducer from './useReducer';
// import Questions from './component/Questions';
import Loader from './component/Loader';
import Error from './component/Error';
import Question from './component/Question';

const App = () => {
  const { state, dispatch } = useQuizReducer();

  // const apiKey = 'afksc7GBsDY4QEqJQjGXWufPUnzr9el6oNZ36YFO';
  const category = state.category;
  const difficulty = state.difficulty;
  const numQuestions = state.numQuestions;
  console.log(category, difficulty, numQuestions);
  const Url = `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(Url);
        console.log(Url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        dispatch({ type: 'DATA_RECEIVED', payload: data.results });
        console.log(data.results);
      } catch (error) {
        dispatch({ type: 'DATA_FAILED', error: error.message });
      }
    };

    const delayDebounce = setTimeout(() => {
      if (!category || !difficulty || !numQuestions) return;
      fetchQuestions();
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [category, difficulty, numQuestions, dispatch]); // Remove `Url` from dependencies

  // Shuffle the options with correct answer
  const shuffleOptions = (options, correctAnswer) => {
    const shuffledOptions = [...options, correctAnswer];
    return shuffledOptions.sort(() => Math.random() - 1);
  };
  return (
    <div className="App">
      <Header />
      <main>
        {state.quizStatus === 'loading' && <Loader />}
        {state.quizStatus === 'error' && <Error />}
        {state.quizStatus === 'ready' && (
          <>
            <StartScreen state={state} dispatch={dispatch} />
          </>
        )}
        {state.quizStatus === 'ongoing' && (
          <>
            <Question
              question={state.questions[state.currentQuestionIndex].question}
              options={shuffleOptions(
                state.questions[state.currentQuestionIndex].incorrect_answers,
                state.questions[state.currentQuestionIndex].correct_answer
              )}
              correctAnswer={
                state.questions[state.currentQuestionIndex].correct_answer
              }
              correctAnswerIndex={
                state.questions[state.currentQuestionIndex].incorrect_answers
                  .length
              }
              userAnswer={state.userAnswer || null}
              dispatch={dispatch}
            />
          </>
        )}
      </main>
    </div>
  );
};
export default App;
