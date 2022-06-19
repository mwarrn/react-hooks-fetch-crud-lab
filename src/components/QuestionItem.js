import React from "react";

function QuestionItem({ question, handleChange, handleDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDeleteClick(event) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => handleDelete(question.id))
  }

  function handleItemChange(event) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correctIndex: event.target.value
      }),
    })
    .then((r) => r.json())
    .then((item) => handleChange(item));
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleItemChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
