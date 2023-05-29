import { useState } from 'react';
import { ChatBotInput } from './ChatbotInput';
import { ChatbotHeader } from './ChatbotHeader';
import { BiBot } from 'react-icons/bi';
import { ChatbotMessageArea } from './ChatbotMessageArea';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  


  if (!isOpen)
    return (
      <button
        className='bg-green-500 p-3 border-4 border-black rounded-full fixed right-4 bottom-2 text-4xl'
        onClick={() => setIsOpen(true)}>
        <BiBot />
      </button>
    );

  return (
    <div className='fixed inset-0 flex flex-col  bg-white border-4 border-black font-2xl'>
      <ChatbotHeader close={() => setIsOpen(false)} />
      <ChatbotMessageArea />
      <ChatBotInput />
    </div>
  );
};
