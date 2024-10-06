// import React, { useState } from 'react';

const data = {
  trivia_categories: [
    { id: 9, name: 'General Knowledge' },
    { id: 10, name: 'Entertainment: Books' },
    { id: 11, name: 'Entertainment: Film' },
    { id: 12, name: 'Entertainment: Music' },
    { id: 13, name: 'Entertainment: Musicals & Theatres' },
    { id: 14, name: 'Entertainment: Television' },
    { id: 15, name: 'Entertainment: Video Games' },
    { id: 16, name: 'Entertainment: Board Games' },
    { id: 17, name: 'Science & Nature' },
    { id: 18, name: 'Science: Computers' },
    { id: 19, name: 'Science: Mathematics' },
    { id: 20, name: 'Mythology' },
    { id: 21, name: 'Sports' },
    { id: 22, name: 'Geography' },
    { id: 23, name: 'History' },
    { id: 24, name: 'Politics' },
    { id: 25, name: 'Art' },
    { id: 26, name: 'Celebrities' },
    { id: 27, name: 'Animals' },
    { id: 28, name: 'Vehicles' },
    { id: 29, name: 'Entertainment: Comics' },
    { id: 30, name: 'Science: Gadgets' },
    { id: 31, name: 'Entertainment: Japanese Anime & Manga' },
    { id: 32, name: 'Entertainment: Cartoon & Animations' },
  ],
};

const categories = data.trivia_categories;

const StartScreen = ({ state, dispatch }) => {
  // const { state, dispatch } = useQuizReducer();
  const { category, difficulty, numQuestions, userName } = state;

  const handleCategoryChange = (event) => {
    dispatch({
      type: 'UPDATE_CATEGORY',
      category: parseInt(event.target.value),
    });
  };

  const handleDifficultyChange = (event) => {
    dispatch({
      type: 'UPDATE_DIFFICULTY',
      difficulty: event.target.value,
    });
  };

  const handleNumQuestionsChange = (event) => {
    dispatch({
      type: 'UPDATE_NUM_QUESTIONS',
      numQuestions: event.target.value,
    });
  };

  const handleUserNameChange = (event) => {
    dispatch({ type: 'UPDATE_USER_NAME', userName: event.target.value });
  };

  const handleStartQuiz = () => {
    dispatch({ type: 'START_QUIZ' });
  };

  return (
    <div className="home">
      <div className="welcome">
        <h2>Welcome to BrainTease 🤯!</h2>
        <p>
          Challenge yourself with quizzes on various topics and become a trivia
          master!
        </p>
      </div>

      {/* Quiz Settings */}
      <div className="quiz-settings">
        <div>
          <label htmlFor="userName">Your Name: </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>

        <div>
          <label htmlFor="category">Select Category: </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="difficulty">Select Difficulty: </label>
          <select
            id="difficulty"
            name="difficulty"
            value={difficulty}
            onChange={handleDifficultyChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label htmlFor="numQuestions">Number of Questions: </label>
          <input
            type="number"
            id="numQuestions"
            name="numQuestions"
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            min="5"
            max="50"
          />
        </div>
      </div>

      {/* Start Quiz Button */}
      <button className="start-btn" onClick={handleStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
