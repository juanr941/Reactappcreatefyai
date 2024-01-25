import React, { useState } from 'react';
// import { Button } from '@mui/base/Button';



const SendMessage = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [isVisible,setisVisible] =useState(false);

    const handleToggleCB = () =>{
        setisVisible(!isVisible);
    }


    const sendMessage = async () => {
        if (message === '' || loading) {
            return;
        }

        try {
            setLoading(true);
            setIsTyping(true);

            const response = await fetch('http://localhost:5000/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', data);

            // Check if data contains 'answer' key
            if (data && 'answer' in data) {
                const newMessages = [
                    ...messages,
                    { user: 'You', message1: message },
                    { user: 'Bot', message1: data.answer },
                ];

                setMessages(newMessages);
                setMessage('');
            } else {
                console.error('Error: No bot reply found in API response', data);
            }
        } catch (error) {
            console.error('Error:', error.message);
        } finally {
            setLoading(false);
            setIsTyping(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };



    return ( 
        <div className="outer-container">
            
  {isVisible && (

    
    
      <div className="rounded container px-0 border border-dark bg-white" style={{ position: 'fixed', left: '60%', top: '20%', height: '60%', width: '33%', zIndex: 1000 }}>
        <div id="chatb" className="message-container" style={{ overflowY: 'scroll', overflowX: 'hidden', display: 'flex', flexDirection: 'column',  flexGrow: 1, height:'85%' }}>

        <div className='pt-2 close'> <h1 className='color-black'>Hi</h1>  <button  onClick={handleToggleCB} data-testid="CloseButton" type="button" aria-label="Close" class="close2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg></button> </div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex p-2 chatui ${msg.user === 'Bot' ? 'bot-message-container' : 'user-message-container'}`}
              style={{
                width:"45%", 
                backgroundColor: msg.user === 'Bot' ? '#7028e4' : 'blue',
                color: msg.user === 'Bot' ? 'white' : 'white',
                alignSelf: msg.user === 'Bot' ? 'flex-start' : 'flex-end',
                padding: '8px',
                
              }}
            >
              {msg.message1}
            </div>
          ))}
          {isTyping && (
            <div className='d-flex bot-message-container' style={{ alignSelf: 'flex-end', marginBottom: '5px' }}>
              CB is typing
            </div>
          )}
        </div>

        {/* Input Area Container */}
        <div className="input-container mt-4" style={{ height: '5vh' }}>
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="form-control w-100 float-left"
          />
         
        </div>

      </div>
    
  )}

  <button onClick={handleToggleCB} className="mt-4 btn btn-primary toggle-button" style={{ left: '85%', position: "fixed", top: "80%" }}>
    {isVisible ? 'Close' : 'Open'}
  </button>
</div>

            
      
    );
}

export default SendMessage;




<div class="chat-header"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>