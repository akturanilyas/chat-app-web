import { baseApi } from '../../baseApi';
import { ENDPOINT } from '../../endpoints';
import { ApiServiceMethod } from '../../../enums/apiServiceMethods.enum';
import { Get, Post } from '../../commonService.interface';
import { Chat } from '../../../types/chat';
import { CreateChatBodyParams } from './chatService.interface';

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query<Array<Chat>, Get>({
      query: ({ query }) => ({
        url: ENDPOINT.CHATS,
        method: ApiServiceMethod.GET,
        data: { params: query },
      }),
    }),
    createChat: builder.mutation<Chat, Post<CreateChatBodyParams>>({
      query: ({ body }) => ({
        url: ENDPOINT.CHATS,
        method: ApiServiceMethod.POST,
        data: { body },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then((response) => {
          const { data }: { data: Chat } = response;

          dispatch(
            chatApi.util.updateQueryData('getChats', {}, (draft: Array<Chat>) => {
              const isExist = draft.find((item) => item.id === data.id);

              if (isExist) {
                return draft;
              }

              return [data, ...draft];
            }),
          );
        });
      },
    }),
  }),
});

export const { useGetChatsQuery, useCreateChatMutation } = chatApi;
