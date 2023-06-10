export interface CourseType {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: AuthorType[];
  isTopRated?: boolean;
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthorType {
  id: number;
  name: string;
}

export interface ModalContentType {
  title: string;
  text: string;
}

export interface ItemContext<T> {
  $implicit: T;
}
