// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:9000");

// const Chat = () => {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.on("message", (data) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });

//     return () => {
//       socket.off("message");
//     };
//   }, []);

//   const sendMessage = () => {
//     if (username && message) {
//       socket.emit("user-message", { username, message });
//       setMessage("");
//     } else {
//       alert("Please enter both a username and a message.");
//     }
//   };

//   return (
//     <div>
//       <h1>Chat Application</h1>
//       <input
//         type="text"
//         placeholder="Enter your username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter your message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>

//       <ul>
//         {messages.map((msg, index) => (
//           <li key={index}>
//             <strong>{msg.username}</strong>: {msg.message}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Chat;
