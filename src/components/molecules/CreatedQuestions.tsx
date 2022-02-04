import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  sortQuestions,
  removeQuestions,
  selectQuestions,
} from '../../redux/questionsSlice';
import { Button, QuestionList } from '../atoms';

export const CreatedQuestions = () => {
  const dispatch = useAppDispatch();
  const questionsList = useAppSelector(
    (state) => selectQuestions(state).questions
  );

  return (
    <>
      <h2>Created questions</h2>
      <QuestionList questionsList={questionsList} />
      <Button btnStyle="sort" onClick={() => dispatch(sortQuestions())}>
        Sort Questions
      </Button>
      <Button btnStyle="remove" onClick={() => dispatch(removeQuestions())}>
        Remove Questions
      </Button>
    </>
  );
};
