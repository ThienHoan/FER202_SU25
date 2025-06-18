import React from 'react';
import './Question.css';

const Question = ({
  question,
  options,
  selectedAnswer,
  onSelect,
  onSubmit,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="question-container">
      <h2>Question {questionNumber} of {totalQuestions}</h2>
      <div className="question-text">{question}</div>
      <div className="options-list">
        {options.map((option, idx) => (
          <button
            key={idx}
            className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className="submit-btn" onClick={onSubmit} disabled={!selectedAnswer}>
        {questionNumber === totalQuestions ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default Question;
