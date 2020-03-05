import React from 'react';
import CardNumber from '../CardNumber/CardNumber';

function App() {

  const [text, SetTask] = React.useState([]);

  const handdleSetText = (newText) => {
    SetTask(newText);


  };


  return (
    <div className="App">
    <h1>{text}</h1>
    <CardNumber onPress={handdleSetText}></CardNumber>
    </div>
  );
}

export default App;
