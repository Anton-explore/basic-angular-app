export interface CourseType {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: AuthorType[];
  isTopRated?: boolean;
}
// export interface User {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
// }

interface NameType {
  first: string;
  last: string;
}
export interface User {
  id: number;
  token?: string;
  name: NameType;
  login: string;
  password?: string;
}

export type UserLoginType = Pick<User, 'token' | 'login' | 'password'>;

export interface AuthorType {
  id: number;
  name: string;
  lastName?: string;
}

export interface ModalContentType {
  title: string;
  text: string;
}

export interface ItemContext<T> {
  $implicit: T;
}

export interface BreadCrumb {
  label: string;
  url: string;
}
