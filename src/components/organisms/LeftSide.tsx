import { useAppSelector } from '../../redux/hooks';
import { selectQuestions } from '../../redux/questionsSlice';

export const LeftSideSection: React.FC = () => {
  const questions = useAppSelector((state) => selectQuestions(state).questions);
  return (
    <section>{`Here you can find ${questions.length} question${
      questions.length !== 1 ? 's' : ''
    }`}</section>
  );
};
