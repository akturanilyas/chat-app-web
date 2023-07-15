import { baseApi } from '../../baseApi';
import { ENDPOINT } from '../../endpoints';
import { ApiServiceMethod } from '../../../enums/apiServiceMethods.enum';
import { Post } from '../../commonService.interface';
import { Auth } from '../../../types/auth';
import {
  AcceptFriendBodyRequest,
  AddFriendBodyRequest,
  RejectFriendBodyRequest,
  RemoveFriendBodyRequest,
} from '../user/userService.interface';

export const friendApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFriend: builder.mutation<Auth, Post<AddFriendBodyRequest>>({
      query: ({ body }) => ({
        url: `${ENDPOINT.FRIENDS}${ENDPOINT.ADD}`,
        method: ApiServiceMethod.POST,
        data: { body },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.then((response) => {
          const { data }: { data: Auth } = response;
        });
      },
    }),
    removeFriend: builder.mutation<Auth, Post<RemoveFriendBodyRequest>>({
      query: ({ body }) => ({
        url: `${ENDPOINT.FRIENDS}${ENDPOINT.REMOVE}`,
        method: ApiServiceMethod.POST,
        data: { body },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.then((response) => {
          const { data }: { data: Auth } = response;
        });
      },
    }),
    acceptFriend: builder.mutation<Auth, Post<AcceptFriendBodyRequest>>({
      query: ({ id }) => ({
        url: `${ENDPOINT.FRIENDS}/${id}${ENDPOINT.ACCEPT}`,
        method: ApiServiceMethod.POST,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.then((response) => {
          const { data }: { data: Auth } = response;
        });
      },
    }),
    rejectFriend: builder.mutation<Auth, Post<RejectFriendBodyRequest>>({
      query: ({ id }) => ({
        url: `${ENDPOINT.FRIENDS}/${id}${ENDPOINT.REJECT}`,
        method: ApiServiceMethod.POST,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.then((response) => {
          const { data }: { data: Auth } = response;
        });
      },
    }),
  }),
});

export const {
  useAcceptFriendMutation,
  useAddFriendMutation,
  useRemoveFriendMutation,
  useRejectFriendMutation,
} = friendApi;
