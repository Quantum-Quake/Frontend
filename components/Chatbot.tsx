import React from 'react';

const ChatButton: React.FC = () => {
  const chatbotUrl = 'URL_TO_CHATBOT'; // Replace with the actual chatbot URL
  const mascotImageUrl = 'https://png.pngtree.com/png-clipart/20210925/ourlarge/pngtree-cartoon-illustration-of-indian-farmers-png-image_3950967.png'; // Replace with the URL of your mascot image

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    bottom: '12vh', // Adjust as needed
    right: '5vh', // Adjust as needed
    zIndex: 1000, // Ensure the button is above other content
  };

  const imgStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
  };

  return (
    <a href={chatbotUrl} target="_blank" rel="noopener noreferrer">
      <button style={buttonStyle}>
        <img src={mascotImageUrl} alt="Chatbot Mascot" style={imgStyle} />
      </button>
    </a>
  );
};

export default ChatButton;
