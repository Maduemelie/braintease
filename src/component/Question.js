export default function Question({
  question,
  options,
  correctAnswer,
  correctAnswerIndex,
  dispatch,
  userAnswer,
}) {
  // console.log(correctAnswerIndex, userAnswer);
  const hasAnswered = userAnswer !== null;
  return (
    <div className="question-container">
      <div className="question">{question}</div>
      <div className="options">
        {options.map((option, index) => (
          <button
            className={`option ${
              hasAnswered && option === userAnswer ? 'selected' : ''
            } ${hasAnswered && option === correctAnswer ? 'correct' : 'wrong'}`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: 'SUBMIT_ANSWER', payload: option })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
