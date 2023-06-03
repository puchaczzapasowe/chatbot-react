import { ChatBotInput } from './ChatbotInput';
import { ChatbotHeader } from './ChatbotHeader';
import { BiBot } from 'react-icons/bi';
import { ChatbotMessageArea } from './ChatbotMessageArea';
import { useAppSelector } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { setChatIsOpen } from '../../../store/chatbotSlice';

export const Chatbot = () => {
  const dispatch = useDispatch();
  const { chatIsOpen } = useAppSelector((state) => state.chatbot);
  if (!chatIsOpen)
    return (
      <button
        className='bg-green-500 p-3 border-4 border-black rounded-full fixed right-4 bottom-2 text-4xl'
        onClick={() => dispatch(setChatIsOpen(true))}>
        <BiBot />
      </button>
    );
  return (
    <div className='fixed  w-screen h-screen lg:w-[300px] lg:h-[400px] lg:bottom-3 lg:right-3 flex flex-col  bg-white border-4 border-black font-2xl'>
      <ChatbotHeader close={() => dispatch(setChatIsOpen(true))} />
      <ChatbotMessageArea />
      <ChatBotInput />
    </div>
  );
};
