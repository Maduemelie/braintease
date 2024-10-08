const CompleteScreen = ({ state }) => {
  return (
    <div className="complete-screen">
      <h1>Quiz Completed!</h1>
      <p>
        Congratulations, {state.username}! You scored {state.score} out of{' '}
        {state.numQuestions}
      </p>
    </div>
  );
};
export default CompleteScreen;
