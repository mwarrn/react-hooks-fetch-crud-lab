import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((items) => setQuestions(items));
  }, []);

  function handleSubmit(toAdd) {
    setQuestions([...questions, toAdd]);
  }

  function handleChange(toUpdate) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === toUpdate.id) {
        return toUpdate;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  function handleDelete(toDelete) {
    const deletedQuestions = questions.filter((question) => question.id !== toDelete);
    setQuestions(deletedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        (<QuestionForm handleSubmit={handleSubmit} />) :
        (<QuestionList
          questions={questions}
          handleDelete={handleDelete}
          handleChange={handleChange}
          />
        )}
    </main>
  );
}

export default App;
