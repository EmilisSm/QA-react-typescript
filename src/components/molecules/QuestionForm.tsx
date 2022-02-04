import { SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { addQuestion } from '../../redux/questionsSlice';
import { useAppDispatch } from '../../redux/hooks';
import { Input, TextArea, Button, Tooltip } from '../atoms';

export const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newQuestion = { id: uuidv4(), question, answer };
    dispatch(addQuestion(newQuestion));
    setQuestion('');
    setAnswer('');
  };

  return (
    <div>
      <Tooltip tooltipText="Here you can create new questions and their answers.">
        <h2>Create a new question</h2>
      </Tooltip>
      <form onSubmit={handleSubmit}>
        <Input
          id="question"
          label="Question"
          type="text"
          placeholder="Add you question here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />

        <TextArea
          id="answer"
          name="answer"
          label="Answer"
          placeholder="Add answer to your question here"
          value={answer}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setAnswer(e.target.value)
          }
          required
        />

        <Button btnStyle="submit" type="submit" disabled={!question || !answer}>
          Create question
        </Button>
      </form>
    </div>
  );
};
