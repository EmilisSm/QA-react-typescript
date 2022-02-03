import { SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

interface QuestionObject {
  id: string;
  question: string;
  answer: string;
}

export const App = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [questionList, setQuestionsList] = useState<Array<QuestionObject>>([
    {
      id: uuidv4(),
      question: 'How to add a question?',
      answer: 'Answer to a question?',
    },
  ]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newQuestion = { id: uuidv4(), question, answer };
    setQuestionsList([...questionList, newQuestion]);
    setQuestion('');
    setAnswer('');
  };

  const triggerAnswer = (index: number) => {
    const el = document.querySelectorAll<HTMLElement>('.answer')[index];
    if (el.style.display === 'none' || !el.style.display) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  };

  return (
    <>
      <header>
        <h1>The awesome Q/A tool</h1>
      </header>
      <main>
        <section>
          {`Here you can find ${questionList.length} question ${
            questionList.length !== 1 && 's'
          }`}
        </section>
        <section>
          <h2>Created questions</h2>
          {questionList.length ? (
            questionList.map((item, index) => (
              <div
                tabIndex={index}
                role="button"
                key={item.id}
                className="question-box"
                onClick={() => triggerAnswer(index)}
                onKeyPress={() => triggerAnswer(index)}
              >
                <div className="question">{item.question}</div>
                <div className="answer">{item.answer}</div>
              </div>
            ))
          ) : (
            <div className="question-box no-question">No question added.</div>
          )}
          <button
            className="btn-sort"
            onClick={() =>
              setQuestionsList([
                ...[...questionList].sort(
                  (a: QuestionObject, b: QuestionObject) =>
                    a.question.localeCompare(b.question)
                ),
              ])
            }
          >
            Sort Questions
          </button>
          <button className="btn-remove" onClick={() => setQuestionsList([])}>
            Remove Questions
          </button>
          <h2>Create a new question</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="question">Question</label>
              <input
                id="question"
                type="text"
                placeholder="Add you question here"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <br />

            <div className="input-wrapper">
              <label htmlFor="answer">Answer</label>
              <textarea
                id="answer"
                name="answer"
                placeholder="Add answer to your question here"
                value={answer}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setAnswer(e.target.value)
                }
                required
              />
            </div>

            <br />

            <button className="btn-submit" type="submit">
              Create question
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
