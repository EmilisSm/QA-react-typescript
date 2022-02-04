import { CreatedQuestions, QuestionForm } from '../molecules';

export const RightSideSection: React.FC = () => {
  return (
    <section>
      <CreatedQuestions />
      <QuestionForm />
    </section>
  );
};
