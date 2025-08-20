import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinnerImage from '../assets/loading-spinner.gif'
import './chatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function saveInputTextByEnter(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
        if (event.key === 'Escape') {
            setInputText('');
        }
    }

    async function sendMessage() {
        if (inputText === '' || isLoading) return;
        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ];

        setChatMessages(newChatMessages);
        setInputText('');
        setIsLoading(true);

        setChatMessages([
            ...newChatMessages,
            {
                message: <img src={LoadingSpinnerImage} className="loading-spinner" />,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        setIsLoading(false);
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                onKeyDown={saveInputTextByEnter}
                value={inputText}
                className="chat-input"
            />
            <button className="send-button"
                onClick={sendMessage}
            >Send</button>
        </div>
    );
}