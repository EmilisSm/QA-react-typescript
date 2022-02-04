import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { QuestionObject } from '../types/QuestionType';
import type { RootState } from './store';
import { v4 as uuidv4 } from 'uuid';

interface initialStateType {
  questions: Array<QuestionObject>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
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

export const submitQuestion = createAsyncThunk(
  'questions/submitQuestion',
  async (args: { question: string; answer: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return { ...args };
  }
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
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
  extraReducers(builder) {
    builder
      .addCase(submitQuestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitQuestion.fulfilled, (state, action) => {
        const { answer, question } = action.payload;
        state.questions.push({
          id: uuidv4(),
          question: question,
          answer: answer,
        });
        state.status = 'succeeded';
      })
      .addCase(submitQuestion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addQuestion, sortQuestions, removeQuestions } =
  questionsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectQuestions = (state: RootState) => state.questions;
// export const selectQuestById = (state: RootState, questionId: string) => state.questions.find((q: QuestionObject) => q.id === questionId);

export default questionsSlice.reducer;
