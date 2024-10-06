const NextButton = ({ dispatch }) => {
  return (
    <button
      className="next-btn"
      onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
    >
      if() Next
    </button>
  );
};
