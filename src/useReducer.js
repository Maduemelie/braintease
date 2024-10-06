// useReducer.js
import { useReducer } from 'react';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswer: null,
  score: 0,
  quizStatus: 'loading', // 'loading', 'ready', 'ongoing', 'complete', 'error'
  totalQuestions: 0,
  feedback: '',
  category: '9',
  difficulty: 'easy',
  numQuestions: 10,
  userName: '',
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_RECEIVED':
      return {
        ...state,
        questions: action.payload,
        quizStatus: 'ready',
      };

    case 'DATA_FAILED':
      return {
        ...state,
        quizStatus: 'error',
      };

    case 'START_QUIZ':
      return {
        ...state,
        quizStatus: 'ongoing',
        totalQuestions: state.questions.length,
      };
    case 'SUBMIT_ANSWER':
      const question = state.questions[state.currentQuestionIndex];
      const isCorrect = question.correct_answer === action.payload;
      console.log(question.correct_answer, action.payload);

      return {
        ...state,
        userAnswer: action.payload,
        score: isCorrect ? state.score + 1 : state.score,
      };

    case 'UPDATE_SCORE':
      return { ...state, score: action.score };
    case 'COMPLETE_QUIZ':
      return { ...state, quizStatus: 'completed' };
    case 'RESET_QUIZ':
      return initialState;
    case 'SET_FEEDBACK':
      return { ...state, feedback: action.feedback };
    case 'SET_LOADING':
      return { ...state, isLoading: action.isLoading };
    case 'UPDATE_CATEGORY':
      return { ...state, category: action.category };
    case 'UPDATE_DIFFICULTY':
      return { ...state, difficulty: action.difficulty };
    case 'UPDATE_NUM_QUESTIONS':
      return { ...state, numQuestions: action.numQuestions };
    case 'UPDATE_USER_NAME':
      return { ...state, userName: action.userName };
    default:
      return state;
  }
};
const useQuizReducer = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return { state, dispatch };
};

export default useQuizReducer;
