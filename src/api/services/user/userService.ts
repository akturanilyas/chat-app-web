import { baseApi } from '../../baseApi';
import { ENDPOINT } from '../../endpoints';
import { ApiServiceMethod } from '../../../enums/apiServiceMethods.enum';
import { setUser } from '../../../redux/slices/mainSlice';
import { User } from '../../../types/user';

export const authApi = baseApi.injectEndpoints({
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
  }),
});

export const { useLazySelfQuery } = authApi;
