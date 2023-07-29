import { useCallback, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { LocalStorage } from '../enums/localStorage.enum';

export function useSocket({
  name,
  onConnect,
}: {
  name: string;
  onConnect?: (payload: Record<string, unknown>) => void;
}) {
  const socket = useRef<Socket | null>(null);

  const onSocketConnect = useCallback(
    (data: Record<string, unknown>) => {
      onConnect && onConnect(data);
    },
    [onConnect],
  );

  const emit = (payload: Record<string, unknown>, responseCallback?: () => void) => {
    if (socket.current) {
      socket.current.emit(name, payload, responseCallback);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem(LocalStorage.ACCESS_TOKEN);

    const { access_token: accessToken } = JSON.parse(auth as string);

    socket.current = io(process.env.APP_API_URL!, {
      transports: ['websocket'],
      autoConnect: true,
      auth: {
        token: accessToken,
      },
    });

    socket.current.on(name, onSocketConnect);

    return () => {
      if (socket.current) {
        socket.current.off(name, onSocketConnect);
        socket.current.disconnect();
      }
    };
  }, [name, onSocketConnect]);

  return { emit };
}
