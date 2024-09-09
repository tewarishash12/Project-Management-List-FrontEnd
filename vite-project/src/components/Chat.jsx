// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';

// // Connect to the Socket.io server
// const socket = io('http://localhost:9000'); // Adjust this URL to match your backend

// const Chat = () => {
//   const [username, setUsername] = useState('');  // State for storing username
//   const [message, setMessage] = useState('');    // State for storing the current message
//   const [messages, setMessages] = useState([]);  // State for storing the list of all messages

//   // Runs once the component mounts, used to listen for messages
//   useEffect(() => {
//     socket.on('message', (data) => {
//       // Whenever a new message comes from the server, we add it to the list of messages
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });

//     // Cleanup: stop listening when component unmounts
//     return () => {
//       socket.off('message');
//     };
//   }, []);

//   // Function to send a message when the user clicks the "Send" button
//   const sendMessage = () => {
//     if (username && message) {
//       socket.emit('user-message', { username, message }); // Emit the message to the server
//       setMessage(''); // Clear the input field after sending
//     } else {
//       alert('Please enter both a username and a message');
//     }
//   };

//   return (
//     <div className="chat-window">
//       <h2>Chat Application</h2>
//       <input
//         type="text"
//         placeholder="Enter your username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="border p-2 m-2"
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="Enter your message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="border p-2 m-2"
//       />
//       <button onClick={sendMessage} className="bg-blue-500 text-white p-2 m-2">
//         Send
//       </button>
//       <ul id="messages">
//         {messages.map((msg, index) => (
//           <li key={index} className="border-b p-2">
//             <div className="message-header">
//               <strong>{msg.username}</strong>
//             </div>
//             <div className="message-body">{msg.message}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Chat;
