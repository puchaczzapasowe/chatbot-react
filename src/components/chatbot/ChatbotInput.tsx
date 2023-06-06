import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { BsSendFill } from 'react-icons/bs';
import { useAppDispatch } from '../../../store/store';
import { Message, MessageType, addMessage } from '../../../store/chatbotSlice';

type ChatbotResponse = {
  message: string;
  tag: string;
};

const sendMessageToBot = async (message: string) => {
  const res = await axios.post(
    'http://localhost:5000/bot',
    JSON.stringify({ message }),
    { headers: { 'Content-Type': 'application/json  ' } }
  );
  console.log(res);

  return res.data as ChatbotResponse;
};

export const ChatBotInput = () => {
  const [newMessage, setNewMassege] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMassege(e.target.value);
    console.log(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const dispatch = useAppDispatch();

  const handleSendMessage = () => {
    sendMutatation(newMessage);
  };

  const { mutate: sendMutatation } = useMutation({
    mutationFn: (message: string) => {
      setNewMassege('');
      return sendMessageToBot(message);
    },

    onSuccess: (data) => {
      const newMessage = {
        text: data.message,
        type: 'info' as MessageType,
        author: 'bot' as const,
      };
      dispatch(addMessage(newMessage));
    },
    onMutate: (data) => {
      const newUserMessage: Message = {
        author: 'user' as const,
        text: newMessage,
        type: 'user' as const,
      };
      setNewMassege('');
      dispatch(addMessage(newUserMessage));
    },
  });

  return (
    <div className='w-full flex flex-nowrap border-t-2 border-black text-[1.4em] '>
      <input
        type='text'
        border-none
        className='flex-grow focus:border-none  '
        value={newMessage}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSendMessage}
        className={`h-full flex justify-center items-center aspect-square  bg-green-600 text-[1em] `}>
        <BsSendFill />
      </button>
    </div>
  );
};
