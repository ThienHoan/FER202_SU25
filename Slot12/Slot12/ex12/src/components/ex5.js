import React, { useReducer } from "react";
import { Button, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Nhớ import bootstrap

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showScore: state.currentQuestion + 1 === state.questions.length,
      };
    case "RESTART_QUIZ":
      return { ...initialState };
    default:
      return state;
  }
}

function Exercise5() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore } = state;

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="shadow p-4" style={{ width: 460, borderRadius: 16 }}>
        {showScore ? (
          <div className="text-center">
            <div style={{ fontSize: 28, margin: "24px 0 12px 0" }}>
              Your Score: <b>{score} / {questions.length}</b>
            </div>
            <Button
              variant="primary"
              size="lg"
              style={{ marginTop: 24, borderRadius: 8, fontWeight: 500 }}
              onClick={handleRestartQuiz}
            >
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-4">
              <div style={{ fontSize: 26, fontWeight: 600 }}>
                Question {questions[currentQuestion].id}:
              </div>
              <div style={{ fontSize: 22, margin: "16px 0 8px 0" }}>
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center mb-4">
              {questions[currentQuestion].options.map((option, idx) => (
                <Button
                  key={idx}
                  variant={selectedOption === option ? "secondary" : "outline-secondary"}
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    minWidth: 120,
                    minHeight: 44,
                    fontSize: 18,
                    fontWeight: 500,
                    margin: 7,
                    borderRadius: 10,
                    background:
                      selectedOption === option ? "#e0e0e0" : "#fff",
                    color: selectedOption === option ? "#333" : "#222",
                    border:
                      selectedOption === option
                        ? "2px solid #bdbdbd"
                        : "2px solid #bdbdbd",
                    boxShadow: "0 1px 4px #0001",
                  }}
                >
                  {option}
                </Button>
              ))}
            </div>
            <div className="text-center">
              <Button
                variant="primary"
                size="lg"
                disabled={!selectedOption}
                style={{
                  borderRadius: 8,
                  fontWeight: 500,
                  padding: "7px 30px",
                  fontSize: 18,
                }}
                onClick={handleNextQuestion}
              >
                {currentQuestion === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </Button>
            </div>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default Exercise5; // Đổi tên thành Exercise5 để tránh nhầm lẫn với Exercise4
