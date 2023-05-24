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
}

export interface AuthorType {
  id: number;
  name: string;
}
