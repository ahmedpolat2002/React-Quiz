function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome Bro</h2>
      <h3>{numQuestions} Questions</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
}

export default StartScreen;
