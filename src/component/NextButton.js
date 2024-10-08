const NextButton = ({ state, dispatch }) => {
  if (state.currentQuestionIndex < state.totalQuestions - 1) {
    return (
      <button
        className="next-btn"
        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
      >
        Next
      </button>
    );
  }
  if (state.currentQuestionIndex === state.totalQuestions - 1) {
    return (
      <button
        className="next-btn"
        onClick={() => dispatch({ type: 'COMPLETE_QUIZ' })}
      >
        Finish
      </button>
    );
  }
};

export default NextButton;
