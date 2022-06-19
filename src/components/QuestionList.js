import React from "react";
import QuestionItem from './QuestionItem';

function QuestionList({ questions, handleChange, handleDelete }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {/* display QuestionItem components here after fetching */}
      {questions.map((question) => {
        return (
          <QuestionItem
          key={question.id}
          question={question}
          handleChange={handleChange}
          handleDelete={handleDelete}
          />
        )
      })}
      </ul>
    </section>
  );
}

export default QuestionList;
