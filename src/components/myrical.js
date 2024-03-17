import axios from 'axios';
const OpenAI = require("openai");
import React, { useState } from 'react';

import 'react-chatbot-kit/build/main.css'
import { Inputs, Button } from './navbar'
import ChatBot, { createChatBotMessage } from 'react-chatbot-kit';
const OpenAIKey = process.env.REACT_APP_OPENAI_KEY;


function OffCanvas() {



    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <ChatBot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
}

const config = {
    initialMessages: [createChatBotMessage('Hello World')],
};

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = async (message) => {
        let newMessage = await generateResponse(message);
        const botMessage = createChatBotMessage(newMessage);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                    },
                });
            })}
        </div>
    );
};

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        actions.handleHello(message);
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};


const generateResponse = async (query, req, res) => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: query }],
                temperature: 0,
                max_tokens: 1000,
            },
            {
                headers: {
                    'Authorization': `Bearer ${OpenAIKey}`
                }
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error generating response:', error);
        throw error;
    }
};




export default OffCanvas