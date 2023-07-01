export interface LoginBodyRequest {
  username: string;
  password: string;
}

export interface RegisterBodyRequest {
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
}
