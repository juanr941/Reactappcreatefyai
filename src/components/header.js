import React, { useState } from "react";

const Header = () => {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: 'grammar wizard'
    },
  ]);

  return (
    <div className='py-2 mb-3' style={{ backgroundColor: 'black', color: 'white', width: '100%', height: '10%' }}>
      <h2>🤖 THE CB 🤖</h2>
    </div>
  );
}

export default Header;
