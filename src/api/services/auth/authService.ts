import { baseApi } from '../../baseApi';
import { Post } from '../../commonService.interface';
import { LoginBodyRequest, RegisterBodyRequest } from './authService.interface';
import { ENDPOINT } from '../../endpoints';
import { ApiServiceMethod } from '../../../enums/apiServiceMethods.enum';
import { Auth } from '../../../types/auth';
import { LocalStorage } from '../../../enums/localStorage.enum';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Auth, Post<LoginBodyRequest>>({
      query: ({ body }) => ({
        url: ENDPOINT.LOGIN,
        method: ApiServiceMethod.POST,
        data: { body },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.then((response) => {
          const { data }: { data: Auth } = response;

          localStorage.setItem(LocalStorage.ACCESS_TOKEN, JSON.stringify(data));
        });
      },
    }),
    register: builder.mutation<Auth, Post<RegisterBodyRequest>>({
      query: ({ body }) => ({
        url: ENDPOINT.REGISTER,
        method: ApiServiceMethod.POST,
        data: { body },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
