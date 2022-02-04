import './style.css';

import { LeftSideSection, RightSideSection } from './components/organisms';

export const App = () => {
  return (
    <>
      <header>
        <h1>The awesome Q/A tool</h1>
      </header>
      <main>
        <LeftSideSection questionsAmount={questions.length} />
        <RightSideSection />
      </main>
    </>
  );
};
