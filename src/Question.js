import React, { useState } from 'react';
// Імпорт іконок мінус та плюс
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {/* Кнопка для відкриття/закриття */}
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/* Якщо showInfo true, показати мінус, інакше плюс */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* Якщо showInfo true, показати інформацію */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;