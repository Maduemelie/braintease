const Progress = ({ state }) => {
  return (
    <div className="progress-container">
      <div className="progress">
        <progress
          max={state.numQuestions}
          value={state.currentQuestionIndex + Number(state.userAnswer !== null)}
        ></progress>
      </div>
      <div className="progress-info">
        <p>
          question {state.currentQuestionIndex + 1} / {state.numQuestions}
        </p>
        <p>
          Score: {state.score}/{state.numQuestions}
        </p>
      </div>
    </div>
  );
};

export default Progress;
