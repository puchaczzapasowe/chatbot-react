import { ChatBotInput } from './ChatbotInput';
import { ChatbotHeader } from './ChatbotHeader';
import { BiBot } from 'react-icons/bi';
import { ChatbotMessageArea } from './ChatbotMessageArea';
import { useAppSelector } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { setChatIsOpen } from '../../../store/chatbotSlice';
import { motion } from 'framer-motion';
import useIsSmallScreen from '@/utilities/useIsSmallScreen';

export const Chatbot = () => {
  const dispatch = useDispatch();
  const { chatIsOpen } = useAppSelector((state) => state.chatbot);
  const isSmallScreen = useIsSmallScreen();
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
      className='fixed  z-10 flex flex-col  bg-white border-4 border-black font-2xl my-fonts'
      animate={
        isSmallScreen
          ? { height: '100vh', width: '100vw', bottom: 0, right: 0 }
          : { height: '400px', width: '300px', bottom: '10px', right: '10px' }
      }
      initial={{ width: 0, height: 0, bottom: '-200px', right: '-200px' }}
      transition={{ duration: 0.3 }}>
      <ChatbotHeader close={() => dispatch(setChatIsOpen(false))} />
      <ChatbotMessageArea />
      <ChatBotInput />
    </motion.div>
  );
};
