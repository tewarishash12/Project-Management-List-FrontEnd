import { useState, useEffect } from 'react';

const useSocket = (url) => {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onmessage = (event) => {
            setMessage(event.data);
        };

        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        setSocket(socket);

        return () => {
            socket.close();
        };
    }, [url]);

    return { socket, message };
};

export default useSocket;
