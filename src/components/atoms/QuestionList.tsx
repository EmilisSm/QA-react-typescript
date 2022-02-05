import { Button } from '.';
import { useAppDispatch } from '../../redux/hooks';
import {
  removeQuestionById,
  selectForEditing,
} from '../../redux/questionsSlice';
import { QuestionObject } from '../../types/QuestionType';

const toggleAnswer = (index: number) => {
  const el = document.querySelectorAll<HTMLElement>('.answer')[index];
  if (el.style.display === 'none' || !el.style.display) {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
};

export const QuestionList: React.FC<{
  questionsList: Array<QuestionObject>;
}> = ({ questionsList }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {questionsList.length ? (
        questionsList.map((item: QuestionObject, index: number) => (
          <div key={item.id}>
            <div
              tabIndex={index}
              role="button"
              key={item.id}
              className="question-box"
              onClick={() => toggleAnswer(index)}
              onKeyPress={() => toggleAnswer(index)}
            >
              <div className="question">{item.question}</div>

              <div className="answer">{item.answer}</div>
            </div>
            <div className="question-buttons">
              <Button
                btnStyle="sort"
                onClick={() => dispatch(selectForEditing(item))}
              >
                ...
              </Button>
              <Button
                btnStyle="remove"
                onClick={() => dispatch(removeQuestionById(item.id))}
              >
                X
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="question-box no-question">No question added.</div>
      )}
    </>
  );
};
