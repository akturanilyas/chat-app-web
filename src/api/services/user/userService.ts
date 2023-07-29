import { baseApi } from '../../baseApi';
import { ENDPOINT } from '../../endpoints';
import { ApiServiceMethod } from '../../../enums/apiServiceMethods.enum';
import { setUser } from '../../../redux/slices/mainSlice';
import { FriendableUser, User } from '../../../types/user';
import { SearchUsersQueryParams } from './userService.interface';
import { Get } from '../../commonService.interface';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    self: builder.query<User, void>({
      query: () => ({ url: ENDPOINT.SELF, method: ApiServiceMethod.GET }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then((response) => {
          const { data }: { data: User } = response;

          dispatch(setUser(data));
        });
      },
    }),
    searchUser: builder.query<Array<FriendableUser>, Get<SearchUsersQueryParams>>({
      query: ({ query }) => ({
        url: ENDPOINT.SEARCH_USERS,
        method: ApiServiceMethod.GET,
        data: { params: query },
      }),
    }),
  }),
});

export const { useLazySelfQuery, useLazySearchUserQuery, useSearchUserQuery } = userApi;
