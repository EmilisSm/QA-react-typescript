import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { QuestionObject } from '../types/QuestionType';
import type { RootState } from './store';
import { v4 as uuidv4 } from 'uuid';

interface initialStateType {
  questions: Array<QuestionObject>;
  questionsForm: QuestionObject;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const emptyQuestion = {
  id: '',
  question: '',
  answer: '',
};

const initialState: initialStateType = {
  questions: [
    {
      id: uuidv4(),
      question: 'How to add a question?',
      answer: 'Use the form below!',
    },
  ],
  questionsForm: emptyQuestion,
  status: 'idle',
  error: null,
};

export const submitQuestion = createAsyncThunk(
  'questions/submitQuestion',
  async (args: {
    id?: string;
    question: string;
    answer: string;
    isDelayed: boolean;
  }) => {
    if (args.isDelayed) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
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
    selectForEditing: (
      state,
      action: PayloadAction<{ id: string; question: string; answer: string }>
    ) => {
      state.questionsForm = action.payload;
    },
    removeQuestionById: (state, action: PayloadAction<string>) => {
      const questionsList = state.questions;
      state.questions = questionsList.filter((q) => q.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(submitQuestion.pending, (state) => {
        state.status = 'loading';
        state.questionsForm = emptyQuestion;
      })
      .addCase(submitQuestion.fulfilled, (state, action) => {
        const { id, answer, question } = action.payload;
        if (id) {
          const selectedQuestion = state.questions.find((q) => q.id === id);
          if (selectedQuestion) {
            selectedQuestion.answer = answer;
            selectedQuestion.question = question;
          }
        } else {
          state.questions.push({
            id: uuidv4(),
            question: question,
            answer: answer,
          });
        }
        state.status = 'succeeded';
      })
      .addCase(submitQuestion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  sortQuestions,
  removeQuestions,
  removeQuestionById,
  selectForEditing,
} = questionsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectQuestions = (state: RootState) => state.questions;

export default questionsSlice.reducer;
