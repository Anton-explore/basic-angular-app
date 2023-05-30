import { CourseType } from './datatypes';

export const COURSES: CourseType[] = [
  {
    id: 455654757,
    name: 'JavaScript',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    date: '5/20/2023',
    length: 160,
    isTopRated: false,
  },
  {
    id: 397520916,
    name: 'Angular',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: '10/11/2020',
    length: 210,
    isTopRated: true,
  },
  {
    id: 208274396,
    name: 'TypeScript',
    description: `JavaScript is a powerful programming language. But as it continues to evolve, outdated code gets messy and difficult to maintain. That's where TypeScript comes in. It builds on your JavaScript foundation so you can develop higher-quality, less error-prone code faster. As a TypeScript developer, you'll be in higher demand and gain a competitive edge in the work world.`,
    date: '7/4/2022',
    length: 410,
    isTopRated: false,
  },
  {
    id: 594397589,
    name: 'Node.js',
    description: `In this course, you will learn the background of Node.js and concepts and strategies for writing asynchronous code using callbacks and streams. It also explains how to modularize your application with NPM and require(). Finally, you will learn built-in APIs for building and scale web applications as well as a few key third-party modules.`,
    date: '8/7/2023',
    length: 610,
    isTopRated: false,
  },
];

export const ICONS = {
  ADD: `<svg width="24" height="24" viewBox="0 0 24 24"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
    fill="white"/>
    </svg>`,
};

export const USER_NAME = 'Test user';

export const BUTTONS_TEXT = {
  ADD: 'Add course',
  EDIT: 'Edit',
  DEL: 'Delete',
  MORE: 'Load more',
  OUT: 'Log out',
  IN: 'Login',
  REG: 'Registration',
  SRCH: 'Search',
  SHOW: 'Show course',
  SHOWALL: 'Show course list',
  CREATE_COURSE: 'Create course',
  UPDATE_COURSE: 'Update course',
  CREATE_AUTHOR: 'Create author',
  ADD_AUTHOR: 'Add author',
  DEL_AUTHOR: 'Delete author',
  RETURN: 'Back to our site',
};

export const INPUTS_TEXT = {
  SRCH: 'Type to search',
  TITLE: 'Title',
  TITLE_PLH: 'Enter title',
  DESCR: 'Description',
  DESCR_PLH: 'Enter description',
  AUTHOR: 'Author name',
  AUTHOR_FOR: 'AuthorName',
  AUTHOR_PLH: 'Enter author name...',
  DURATION: 'Duration',
  DURATION_PLH: 'Enter duration in minutes...',
  NAME: 'Name',
  NAME_PLH: 'Enter name',
  EML: 'Email',
  EML_PLH: 'Enter email',
  PASS: 'Password',
  PASS_PLH: 'Enter password',
};

export const sortedByDateAsc: CourseType[] = [
  {
    id: 397520916,
    name: 'Angular',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: '10/11/2020',
    length: 210,
    isTopRated: true,
  },
  {
    id: 208274396,
    name: 'TypeScript',
    description: `JavaScript is a powerful programming language. But as it continues to evolve, outdated code gets messy and difficult to maintain. That's where TypeScript comes in. It builds on your JavaScript foundation so you can develop higher-quality, less error-prone code faster. As a TypeScript developer, you'll be in higher demand and gain a competitive edge in the work world.`,
    date: '7/4/2022',
    length: 410,
    isTopRated: false,
  },
  {
    id: 455654757,
    name: 'JavaScript',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    date: '5/20/2023',
    length: 160,
    isTopRated: false,
  },
  {
    id: 594397589,
    name: 'Node.js',
    description: `In this course, you will learn the background of Node.js and concepts and strategies for writing asynchronous code using callbacks and streams. It also explains how to modularize your application with NPM and require(). Finally, you will learn built-in APIs for building and scale web applications as well as a few key third-party modules.`,
    date: '8/7/2023',
    length: 610,
    isTopRated: false,
  },
];

export const sortedByDateDesc: CourseType[] = [
  {
    id: 594397589,
    name: 'Node.js',
    description: `In this course, you will learn the background of Node.js and concepts and strategies for writing asynchronous code using callbacks and streams. It also explains how to modularize your application with NPM and require(). Finally, you will learn built-in APIs for building and scale web applications as well as a few key third-party modules.`,
    date: '8/7/2023',
    length: 610,
    isTopRated: false,
  },
  {
    id: 455654757,
    name: 'JavaScript',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    date: '5/20/2023',
    length: 160,
    isTopRated: false,
  },
  {
    id: 208274396,
    name: 'TypeScript',
    description: `JavaScript is a powerful programming language. But as it continues to evolve, outdated code gets messy and difficult to maintain. That's where TypeScript comes in. It builds on your JavaScript foundation so you can develop higher-quality, less error-prone code faster. As a TypeScript developer, you'll be in higher demand and gain a competitive edge in the work world.`,
    date: '7/4/2022',
    length: 410,
    isTopRated: false,
  },
  {
    id: 397520916,
    name: 'Angular',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: '10/11/2020',
    length: 210,
    isTopRated: true,
  },
];

export const sortedByNameAsc: CourseType[] = [
  {
    id: 397520916,
    name: 'Angular',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: '10/11/2020',
    length: 210,
    isTopRated: true,
  },
  {
    id: 455654757,
    name: 'JavaScript',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    date: '5/20/2023',
    length: 160,
    isTopRated: false,
  },
  {
    id: 594397589,
    name: 'Node.js',
    description: `In this course, you will learn the background of Node.js and concepts and strategies for writing asynchronous code using callbacks and streams. It also explains how to modularize your application with NPM and require(). Finally, you will learn built-in APIs for building and scale web applications as well as a few key third-party modules.`,
    date: '8/7/2023',
    length: 610,
    isTopRated: false,
  },
  {
    id: 208274396,
    name: 'TypeScript',
    description: `JavaScript is a powerful programming language. But as it continues to evolve, outdated code gets messy and difficult to maintain. That's where TypeScript comes in. It builds on your JavaScript foundation so you can develop higher-quality, less error-prone code faster. As a TypeScript developer, you'll be in higher demand and gain a competitive edge in the work world.`,
    date: '7/4/2022',
    length: 410,
    isTopRated: false,
  },
];
export const sortedByNameDesc: CourseType[] = [
  {
    id: 208274396,
    name: 'TypeScript',
    description: `JavaScript is a powerful programming language. But as it continues to evolve, outdated code gets messy and difficult to maintain. That's where TypeScript comes in. It builds on your JavaScript foundation so you can develop higher-quality, less error-prone code faster. As a TypeScript developer, you'll be in higher demand and gain a competitive edge in the work world.`,
    date: '7/4/2022',
    length: 410,
    isTopRated: false,
  },
  {
    id: 594397589,
    name: 'Node.js',
    description: `In this course, you will learn the background of Node.js and concepts and strategies for writing asynchronous code using callbacks and streams. It also explains how to modularize your application with NPM and require(). Finally, you will learn built-in APIs for building and scale web applications as well as a few key third-party modules.`,
    date: '8/7/2023',
    length: 610,
    isTopRated: false,
  },
  {
    id: 455654757,
    name: 'JavaScript',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    date: '5/20/2023',
    length: 160,
    isTopRated: false,
  },
  {
    id: 397520916,
    name: 'Angular',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: '10/11/2020',
    length: 210,
    isTopRated: true,
  },
];
export const filteredCourses: CourseType[] = [
  {
    id: 208274396,
    name: 'TypeScript',
    description: `JavaScript is a powerful programming language. But as it continues to evolve, outdated code gets messy and difficult to maintain. That's where TypeScript comes in. It builds on your JavaScript foundation so you can develop higher-quality, less error-prone code faster. As a TypeScript developer, you'll be in higher demand and gain a competitive edge in the work world.`,
    date: '7/4/2022',
    length: 410,
    isTopRated: false,
  },
  {
    id: 455654757,
    name: 'JavaScript',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    date: '5/20/2023',
    length: 160,
    isTopRated: false,
  },
];
