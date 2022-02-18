import { QuestionObject } from '../../types/QuestionType';
import QuestionBox from './QuestionBox';

export const QuestionList: React.FC<{
  questionsList: Array<QuestionObject>;
}> = ({ questionsList }) => {
  return (
    <>
      {questionsList.length ? (
        questionsList.map((item: QuestionObject, index: number) => (
          <QuestionBox key={item.id} item={item} index={index} />
        ))
      ) : (
        <div className="question-box no-question">No question added.</div>
      )}
    </>
  );
};
