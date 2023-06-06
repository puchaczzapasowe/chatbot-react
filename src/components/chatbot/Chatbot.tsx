import { ChatBotInput } from './ChatbotInput';
import { ChatbotHeader } from './ChatbotHeader';
import { BiBot } from 'react-icons/bi';
import { ChatbotMessageArea } from './ChatbotMessageArea';
import { useAppSelector } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { setChatIsOpen } from '../../../store/chatbotSlice';
import { motion } from 'framer-motion';

export const Chatbot = () => {
  const dispatch = useDispatch();
  const { chatIsOpen } = useAppSelector((state) => state.chatbot);

  if (!chatIsOpen)
    return (
      <button
        className='bg-green-500 p-3 border-2 border-black rounded-full fixed right-4 bottom-2 text-4xl'
        onClick={() => dispatch(setChatIsOpen(true))}>
        <BiBot />
      </button>
    );
  return (
    <motion.div
      className='fixed  lg:w-[300px] lg:h-[400px] lg:bottom-5 lg:right-5 flex flex-col  bg-white border-4 border-black font-2xl'
      // animate={{ width:'auto',height:'auto' }}
      // initial={{width:0,height:0}}
      transition={{duration:.3}}
      >
      <ChatbotHeader close={() => dispatch(setChatIsOpen(false))} />
      <ChatbotMessageArea />
      <ChatBotInput />
    </motion.div>
  );
};

