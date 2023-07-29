import { baseApi } from '../../baseApi';
import { ENDPOINT } from '../../endpoints';
import { ApiServiceMethod } from '../../../enums/apiServiceMethods.enum';
import { Get, Post } from '../../commonService.interface';
import { Message } from '../../../types/message';
import { CreateChatBodyParams } from '../chat/chatService.interface';

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query<Array<Message>, Get>({
      query: ({ id, query }) => ({
        url: `${ENDPOINT.CHATS}/${id}${ENDPOINT.MESSAGES}`,
        method: ApiServiceMethod.GET,
        data: { params: query },
      }),
    }),
    createMessage: builder.mutation<Message, Post<CreateChatBodyParams>>({
      query: ({ id, body }) => ({
        url: `${ENDPOINT.CHATS}/${id}${ENDPOINT.MESSAGES}`,
        method: ApiServiceMethod.POST,
        data: { body },
      }),
    }),
  }),
});

export const { useGetMessagesQuery, useCreateMessageMutation, useLazyGetMessagesQuery }
  = chatApi;
