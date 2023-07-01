import { createApi } from '@reduxjs/toolkit/query/react';
import { API_PREFIX } from './prefixes';
import { ApiRequestProvider } from '../providers/ApiRequestProvider';
import { LocalStorage } from '../enums/localStorage.enum';

const apiRequestProvider = new ApiRequestProvider({
  baseURL: process.env.APP_API_URL!,
  prefix: API_PREFIX.API,
  storageAuthKey: LocalStorage.ACCESS_TOKEN,
});

export const baseApi = createApi({
  reducerPath: API_PREFIX.API,
  baseQuery: apiRequestProvider.requester(),
  endpoints: () => ({}),
  // TagTypes: Object.keys(ProvideTag),
});
