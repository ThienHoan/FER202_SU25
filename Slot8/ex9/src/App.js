import React from 'react';
import { Container } from 'react-bootstrap';
import SimpleCard from './components/SimpleCard';

function App() {
  const cardItem = {
    title: "Hoai Nguyen - FPT DaNang",
    description: "Mobile: 0982827763",
    imageUrl: "https://cdn.haitrieu.com/wp-content/uploads/2023/05/Logo-Truong-Cao-dang-FPT-Polytechnic.png"
  };

  return (
    <Container className="py-4">
      <SimpleCard item={cardItem} />
    </Container>
  );
}

export default App;
