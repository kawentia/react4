import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuetion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>quetion and answers about login</h3>
        <section className="info">
          {questions.map((quetion) => {
            return <SingleQuestion key={quetion.id}{...quetion} />;
          })}
        </section>
      </div>
    </main>
  )
}

export default App;