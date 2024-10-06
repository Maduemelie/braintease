export default function Options({ options, dispatch, hasAnswered }) {
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={index}
          className="option"
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'SELECT_OPTION', option })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
