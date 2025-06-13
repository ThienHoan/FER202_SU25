// App.js
import "./App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Welcome from "./components/Welcome";
import UserProfile from "./components/UserProfile";
import NameList from "./components/NameList";
import StudentCard from "./components/StudentCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const userData = { name: "thienddhde180618@fpt.edu.vn", age: 12 };
  const namesList = ["thienddhde180618@fpt.edu.vn", "test@fe.edu.vn"];
  const students = [
    { name: "khatnDE180617@fpt.edu.vn", age: 1000, avatar: "/images/student1.jpg" },
    { name: "thienddtDE180618@fpt.edu.vn", age: 12, avatar: "/images/student2.jpg" },
    { name: "đucdtDE180619@fpt.edu.vn", age: 100, avatar: "/images/student3.jpg" },
  ];
  return (
    <>
      <Welcome name="thienddhde180618@fpt.edu.vn" />
      <Welcome name="fptdn@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
