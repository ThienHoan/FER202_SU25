import React from 'react';
import SimpleCard from './components/SimpleCard';

function App() {
  const cardItem = {
    title: "Hoai Nguyen - FPT DaNang",
    description: "Mobile: 0356176878",
    imageUrl: "https://imgs.search.brave.com/TfKlxyIZH2RUOAfY6h-D0GqibI8M6pY31326wMb9FDg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93aGF0/dGhlbG9nby5jb20v/c3RvcmFnZS9sb2dv/cy9mcHQtdW5pdmVy/c2l0eS04NDI2MS5w/bmc"
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
      <SimpleCard item={cardItem} />
    </div>
  );
}

export default App;
