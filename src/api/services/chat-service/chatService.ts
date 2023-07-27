import { baseApi } from '../../baseApi';
import { ENDPOINT } from '../../endpoints';
import { ApiServiceMethod } from '../../../enums/apiServiceMethods.enum';
import { Get, Post } from '../../commonService.interface';
import { Chat } from '../../../types/chat';
import { CreateChatBoduParams } from './chatService.interface';

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query<Array<Chat>, Get>({
      query: ({ query }) => ({
        url: ENDPOINT.CHATS,
        method: ApiServiceMethod.GET,
        data: { params: query },
      }),
    }),
    createChat: builder.mutation<Chat, Post<CreateChatBoduParams>>({
      query: ({ body }) => ({
        url: ENDPOINT.CHATS,
        method: ApiServiceMethod.POST,
        data: { body },
      }),
    }),
  }),
});

export const { useGetChatsQuery, useCreateChatMutation } = chatApi;
