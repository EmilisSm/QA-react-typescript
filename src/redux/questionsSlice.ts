import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionObject } from '../types/QuestionType';
import type { RootState } from './store';
import { v4 as uuidv4 } from 'uuid';

interface initialStateType {
  questions: Array<QuestionObject>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: initialStateType = {
  questions: [
    {
      id: uuidv4(),
      question: 'How to add a question?',
      answer: 'Use the form below!',
    },
  ],
  status: 'idle',
  error: null,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (
      state,
      action: PayloadAction<{ question: string; answer: string }>
    ) => {
      const { answer, question } = action.payload;
      state.questions.push({
        id: uuidv4(),
        question: question,
        answer: answer,
      });
    },
    sortQuestions: (state) => {
      const questionsList = state.questions;
      questionsList.sort((a: QuestionObject, b: QuestionObject) =>
        a.question.localeCompare(b.question)
      );
    },
    removeQuestions: (state) => {
      state.questions = [];
    },
    editQuestion: (
      state,
      action: PayloadAction<{ id: string; question: string; answer: string }>
    ) => {
      const { id, answer, question } = action.payload;
      const selectedQuestion = state.questions.find((q) => q.id === id);
      if (selectedQuestion) {
        selectedQuestion.answer = answer;
        selectedQuestion.question = question;
      }
    },
    removeQuestionById: (state, action: PayloadAction<string>) => {
      const questionsList = state.questions;
      questionsList.filter((q) => q.id !== action.payload);
    },
  },
});

export const { addQuestion, sortQuestions, removeQuestions } =
  questionsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectQuestions = (state: RootState) => state.questions;
// export const selectQuestById = (state: RootState, questionId: string) => state.questions.find((q: QuestionObject) => q.id === questionId);

export default questionsSlice.reducer;
