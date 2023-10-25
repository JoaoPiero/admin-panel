// types.ts

export interface User {
  id: number,
  name: {
    first: string;
    last: string;
  };
  email: string;
  charge: string
}