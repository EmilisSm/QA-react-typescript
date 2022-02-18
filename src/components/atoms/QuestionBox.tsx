import React from 'react';
import { QuestionObject } from '../../types/QuestionType';

import {
  removeQuestionById,
  selectForEditing,
} from '../../redux/questionsSlice';
import { useAppDispatch } from '../../redux/hooks';
import { Button } from '.';

const toggleAnswer = (index: number) => {
  const el = document.querySelectorAll<HTMLElement>('.answer')[index];
  if (el.style.display === 'none' || !el.style.display) {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
};

const QuestionBox: React.FC<{ item: QuestionObject; index: number }> = ({
  item,
  index,
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
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
    </>
  );
};

export default React.memo(QuestionBox);
