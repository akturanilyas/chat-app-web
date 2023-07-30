import { baseApi } from '../../baseApi';
import { ENDPOINT } from '../../endpoints';
import { ApiServiceMethod } from '../../../enums/apiServiceMethods.enum';
import { Get, Post } from '../../commonService.interface';
import {
  AcceptFriendBodyRequest,
  AddFriendBodyRequest,
  RejectFriendBodyRequest,
  RemoveFriendBodyRequest,
} from './friendService.interface';
import { Friend, FriendRequest } from '../../../types/friend';
import { SearchUsersQueryParams } from '../user/userService.interface';
import { FriendableUser } from '../../../types/user';
import { FriendStatus } from '../../../enums/friendStatus.enum';
import { userApi } from '../user/userService';

export const friendApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFriends: builder.query<Array<Friend>, Get<SearchUsersQueryParams>>({
      query: ({ query }) => ({
        url: ENDPOINT.FRIENDS,
        method: ApiServiceMethod.GET,
        data: { params: query },
      }),
    }),
    addFriend: builder.mutation<FriendRequest, Post<AddFriendBodyRequest>>({
      query: ({ body }) => ({
        url: `${ENDPOINT.FRIENDS}${ENDPOINT.ADD}`,
        method: ApiServiceMethod.POST,
        data: { body },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then((response) => {
          const { data }: { data: FriendRequest } = response;

          dispatch(
            userApi.util.updateQueryData(
              'searchUser',
              {},
              (draft: Array<FriendableUser>) => draft.map((user) => {
                  if (user.id === data.receiver_id) {
                    return { ...user, status: FriendStatus.RECEIVED };
                  }

                  return user;
                }),
            ),
          );
        });
      },
    }),
    removeFriend: builder.mutation<Friend, Post<RemoveFriendBodyRequest>>({
      query: ({ body }) => ({
        url: `${ENDPOINT.FRIENDS}${ENDPOINT.REMOVE}`,
        method: ApiServiceMethod.DELETE,
        data: { body },
      }),
    }),
    acceptFriend: builder.mutation<FriendRequest, Post<AcceptFriendBodyRequest>>({
      query: ({ id }) => ({
        url: `${ENDPOINT.FRIENDS}/${id}${ENDPOINT.ACCEPT}`,
        method: ApiServiceMethod.POST,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        queryFulfilled.then(async (value) => {
          const { data }: { data: FriendRequest } = value;

          dispatch(
            friendApi.util.updateQueryData(
              'friendRequests',
              {},
              (draft: Array<FriendRequest>) =>
                draft.filter((request) => request.id !== data.id),
            ),
          );
        });
      },
    }),
    rejectFriend: builder.mutation<FriendRequest, Post<RejectFriendBodyRequest>>({
      query: ({ id }) => ({
        url: `${ENDPOINT.FRIENDS}/${id}${ENDPOINT.REJECT}`,
        method: ApiServiceMethod.POST,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        queryFulfilled.then(async (value) => {
          const { data }: { data: FriendRequest } = value;

          dispatch(
            friendApi.util.updateQueryData(
              'friendRequests',
              {},
              (draft: Array<FriendRequest>) =>
                draft.filter((request) => request.id !== data.id),
            ),
          );
        });
      },
    }),
    friendRequests: builder.query<Array<FriendRequest>, Get>({
      query: ({ id }) => ({
        url: `${ENDPOINT.FRIENDS}${ENDPOINT.REQUESTS}`,
        method: ApiServiceMethod.GET,
      }),
    }),
  }),
});

export const {
  useAcceptFriendMutation,
  useAddFriendMutation,
  useRemoveFriendMutation,
  useRejectFriendMutation,
  useFriendRequestsQuery,
  useGetFriendsQuery,
  useLazyGetFriendsQuery,
} = friendApi;
