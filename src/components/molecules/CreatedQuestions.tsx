import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  sortQuestions,
  removeQuestions,
  selectQuestions,
} from '../../redux/questionsSlice';
import { Button, QuestionList, Tooltip } from '../atoms';

export const CreatedQuestions = () => {
  const dispatch = useAppDispatch();
  const questionsList = useAppSelector(
    (state) => selectQuestions(state).questions
  );

  return (
    <>
      <Tooltip tooltipText="Here you can find created questions and their answers.">
        <h2>Created questions</h2>
      </Tooltip>
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
