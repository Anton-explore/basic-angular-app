import { CourseType } from './datatypes';

export const COURSES: CourseType[] = [
  {
    id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
    title: 'JavaScript',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    creationDate: '8/3/2021',
    duration: 160,
  },
  {
    id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
    title: 'Angular',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    creationDate: '10/11/2020',
    duration: 210,
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
