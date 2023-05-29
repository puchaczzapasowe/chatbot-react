import { HtmlHTMLAttributes } from 'react';
import { useAppSelector } from '../../../store/store';
import { Message } from '../../../store/chatbot';

type CssStyles = HtmlHTMLAttributes<HTMLElement>['className'];

const messageStyles = new Map<string, CssStyles>([['info', 'bg-green-600']]);

const ChatbotMassage = ({ message }: { message: Message }) => {
  const { author, text, type } = message;
  console.log(author,author==='bot');
  
  const messageStyle: CssStyles = `${messageStyles.get(type)} ${
    author === 'user' ? ' ':' ml-[40%]'
  }`;

  return (
    <span className={`w-max-3/5 w-fit w-min-1/3 p-2 rounded-md border-2 border-black  ` + messageStyle}>
      {text}
    </span>
  );
};
export const ChatbotMessageArea = () => {
  const { messages } = useAppSelector((state) => state.chatbot);

  return (
    <div className=' flex flex-col flex-grow border-2 border-y-red-800 p-1 gap-2 font-semibold'>
      {messages.map((message, index) => (
        <ChatbotMassage message={message} key={index} />
      ))}
    </div>
  );
};
