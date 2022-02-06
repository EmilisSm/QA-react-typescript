# QA-react-redux-typescript

> Q/A application made with
> React and Redux
> Live demo [link](https://emilissm.github.io/QA-react-typescript/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents

- [Purpose of project](#purpose-of-project)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)

## Purpose of project

- The purpose of this project was to show knowledge of using tools like React or Redux.

## Technologies Used

- React - v17.0.02
- Webpack - v5.67.0
- Babel - v7.17
- Typescript - v4.5.5
- Redux - v4.1.2
- react-redux - v7.2.6
- uuid - v8.3.2
- eslint - v8.7.0
- Pretier - v2.5.1
- GithubPages - v3.2.3

## Features

List the ready features here:

- Add Question with Answer
- Display added Questions
- Sort Questions alphabetically
- Display each questions hidden answer
- Remove all questions
- Display questions count

## Setup

To install the project dependencies:

```bash
npm install
```

### Development

To run the project in development mode:

```bash
npm start
```

### Production

To build the project for production:

```bash
npm run build
```

### Testing

To run tests:

```bash
npm test
```

## Project Status

Work in progress...

## Room for Improvement

Room for improvement:

- Separate styles by each component, implementation could be done with styled-components

To do:

- Display loading state in UI
- Add Tests Jest & RTL (React Testing Library)
- Add more animation styles and transitions
- Create webpack aliases to import or require certain modules in more clean way.

## Acknowledgements

- For structuring my components i was inspired by Atomic Design Methodology [link](https://atomicdesign.bradfrost.com/chapter-2/) but chose to exclude templates and pages as this App doesn't have routing to other pages.
- I used Redux documentation from [link](https://redux.js.org/tutorials/essentials/part-5-async-logic) as guide. I used createAsyncThunk for asynchronous event.
