import { SetStateAction, useEffect, useState } from 'react';
import { submitQuestion } from '../../redux/questionsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Input, TextArea, Button, Tooltip } from '../atoms';

export const QuestionForm: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isDelayed, setIsDelayed] = useState(false);
  const questionsForEdit = useAppSelector(
    (state) => state.questions.questionsForm
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    setQuestion(questionsForEdit.question);
    setAnswer(questionsForEdit.answer);
  }, [questionsForEdit]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newQuestion = {
      id: questionsForEdit.id,
      question,
      answer,
    };
    dispatch(submitQuestion({ ...newQuestion, isDelayed }));
    setIsDelayed(false);
    setQuestion('');
    setAnswer('');
  };

  const handleCheckbox = () => {
    setIsDelayed(!isDelayed);
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

        <div className={`input-wrapper-row`}>
          <input
            id="isDelayedCheck"
            type="checkbox"
            checked={isDelayed}
            onChange={handleCheckbox}
          />
          <label htmlFor="isDelayedCheck">Is question delayed for 5s?</label>
        </div>

        <Button btnStyle="submit" type="submit" disabled={!question || !answer}>
          Create question
        </Button>
      </form>
    </div>
  );
};
