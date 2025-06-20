import React, { useReducer, useEffect, useRef } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

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
  showFeedback: false,
  isCorrect: false,
  timer: 10,
  highScore: 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "SET_TIMER":
      return { ...state, timer: action.payload };
    case "SUBMIT_ANSWER":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        showFeedback: true,
        isCorrect: isCorrect,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showFeedback: false,
        isCorrect: false,
        timer: 10,
        showScore:
          state.currentQuestion + 1 === state.questions.length ? true : false,
      };
    case "RESTART_QUIZ":
      return {
        ...initialState,
        highScore: state.highScore,
      };
    case "SET_HIGH_SCORE":
      return { ...state, highScore: action.payload };
    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, {
    ...initialState,
    highScore: Number(localStorage.getItem("highScore") || 0),
  });

  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    showFeedback,
    isCorrect,
    timer,
    highScore,
  } = state;

  const intervalRef = useRef(null);

  // Timer logic
  useEffect(() => {
    if (showScore || showFeedback) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      dispatch({ type: "SET_TIMER", payload: state.timer - 1 });
    }, 1000);

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [currentQuestion, showFeedback, showScore, state.timer]);

  useEffect(() => {
    if (timer === 0 && !showScore && !showFeedback) {
      // Auto submit khi hết giờ
      dispatch({ type: "SUBMIT_ANSWER" });
      clearInterval(intervalRef.current);
    }
    // eslint-disable-next-line
  }, [timer, showScore, showFeedback]);

  // Lưu điểm cao vào localStorage khi kết thúc quiz
  useEffect(() => {
    if (showScore) {
      if (score > highScore) {
        localStorage.setItem("highScore", score);
        dispatch({ type: "SET_HIGH_SCORE", payload: score });
      }
    }
    // eslint-disable-next-line
  }, [showScore, score]);

  // Handle chọn đáp án
  const handleOptionSelect = (option) => {
    if (!showFeedback) {
      dispatch({ type: "SELECT_OPTION", payload: option });
    }
  };

  // Nộp đáp án (hoặc khi hết giờ)
  const handleSubmit = () => {
    if (selectedOption && !showFeedback) {
      dispatch({ type: "SUBMIT_ANSWER" });
    }
  };

  // Câu hỏi tiếp theo hoặc kết thúc quiz
  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  // Tiến trình
  const progressText = `${currentQuestion + (showScore ? 0 : 1)}/${questions.length}`;

  // Lấy đáp án đúng của câu hiện tại
  const correctAnswer = questions[currentQuestion]?.answer;

  // Tính phần trăm cho ProgressBar
  const percentDone = Math.round(
    (currentQuestion / questions.length) * 100
  );

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="shadow p-4" style={{ width: 480, borderRadius: 16 }}>
        {/* Tiến trình */}
        {!showScore && (
          <div className="d-flex align-items-center mb-3" style={{ fontWeight: 500 }}>
            <ProgressBar
              now={percentDone}
              style={{ flex: 1, marginRight: 12, height: 11, borderRadius: 8 }}
              variant="info"
            />
            <span style={{ fontSize: 16, width: 60, textAlign: "right" }}>
              {progressText}
            </span>
          </div>
        )}

        {/* Kết thúc quiz */}
        {showScore ? (
          <div className="text-center">
            <div style={{ fontSize: 28, margin: "24px 0 12px 0" }}>
              Your Score: <b>{score} / {questions.length}</b>
            </div>
            <div style={{ fontSize: 18, color: "#00b894", marginBottom: 16 }}>
              🏆 High Score: <b>{highScore}</b>
            </div>
            <Button
              variant="primary"
              size="lg"
              style={{ marginTop: 16, borderRadius: 8, fontWeight: 500 }}
              onClick={handleRestartQuiz}
            >
              Restart Quiz
            </Button>
          </div>
        ) : (
          <>
            {/* Câu hỏi */}
            <div className="text-center mb-4">
              <div style={{ fontSize: 25, fontWeight: 600, marginBottom: 6 }}>
                Question {questions[currentQuestion].id}:
              </div>
              <div style={{ fontSize: 22, margin: "10px 0 8px 0" }}>
                {questions[currentQuestion].question}
              </div>
            </div>

            {/* Đếm ngược */}
            <div className="text-center mb-3">
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: timer <= 5 ? "#e84118" : "#111",
                  transition: "color .2s",
                }}
              >
                ⏰ {timer}s
              </span>
            </div>

            {/* Đáp án */}
            <div className="d-flex flex-wrap justify-content-center mb-4">
              {questions[currentQuestion].options.map((option, idx) => {
                let variant = "outline-secondary";
                let style = {
                  minWidth: 120,
                  minHeight: 44,
                  fontSize: 18,
                  fontWeight: 500,
                  margin: 7,
                  borderRadius: 10,
                  boxShadow: "0 1px 4px #0001",
                };

                // Đổi màu sau khi submit đáp án
                if (showFeedback) {
                  if (option === correctAnswer) {
                    // Đáp án đúng luôn xanh
                    variant = "success";
                    style.background = "#00b894";
                    style.color = "#fff";
                  } else if (option === selectedOption) {
                    // Đáp án chọn nhưng sai thì đỏ nhạt
                    variant = "danger";
                    style.background = "#ffd6d6";
                    style.color = "#c00";
                  }
                } else if (selectedOption === option) {
                  // Đang chọn khi chưa submit
                  style.background = "#e0e0e0";
                  style.color = "#333";
                  style.border = "2px solid #bdbdbd";
                }

                return (
                  <Button
                    key={idx}
                    variant={variant}
                    onClick={() => handleOptionSelect(option)}
                    style={style}
                    disabled={showFeedback}
                  >
                    {option}
                  </Button>
                );
              })}
            </div>

            {/* Hiện feedback đúng/sai */}
            {showFeedback && (
              <div className="text-center mb-3" style={{ fontSize: 18 }}>
                {isCorrect ? (
                  <span style={{ color: "#27ae60", fontWeight: 600 }}>
                    <FaCheckCircle style={{ fontSize: 23, verticalAlign: -4 }} /> Correct! 🎉
                  </span>
                ) : (
                  <span style={{ color: "#c0392b", fontWeight: 600 }}>
                    <FaTimesCircle style={{ fontSize: 22, verticalAlign: -4 }} /> Incorrect! The correct answer is: <b>{correctAnswer}</b>
                  </span>
                )}
              </div>
            )}

            {/* Nút Next/Finish */}
            <div className="text-center">
              {!showFeedback ? (
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
                  onClick={handleSubmit}
                >
                  {currentQuestion === questions.length - 1
                    ? "Finish Quiz"
                    : "Next Question"}
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="lg"
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
              )}
            </div>
          </>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
