import React, { useState } from 'react';
import './WordCounter.css'; // You can define your styles in this CSS file

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div className="word-counter">
      <h2>Responsive Paragraph Word <br></br>Counter</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your paragraph here..."
        value={text}
        onChange={handleInputChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
