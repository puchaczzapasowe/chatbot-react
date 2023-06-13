import { HtmlHTMLAttributes, useEffect, useRef } from 'react';
import { useAppSelector } from '../../../store/store';
import { Message } from '../../../store/chatbotSlice';
import ProductListElement from '../ProcuctListElement';

type CssStyles = HtmlHTMLAttributes<HTMLElement>['className'];

const messageStyles = new Map<string, CssStyles>([['info', 'bg-green-600']]);

const ChatbotMassage = ({ message }: { message: Message }) => {
  const { author, text, type } = message;
  const messageStyle: CssStyles = `${messageStyles.get(type)} ${
    author === 'user' ? ' ' : ' ml-[40%]'
  }`;

  return (
    <span
      className={
        `w-max-3/5 w-fit w-min-1/3 p-2 rounded-md border-2 border-black overflow-x-scroll:hidden  ` +
        messageStyle
      }>
      {text}
    </span>
  );
};
export const ChatbotMessageArea = () => {
  const { messages } = useAppSelector((state) => state.chatbot);
  const divAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divAreaRef.current?.scrollTo({
      top: divAreaRef.current.clientHeight,
      behavior: 'smooth',
    });
  }, [messages]);
  return (
    <div
      className=' flex flex-col flex-grow p-1 gap-2 font-semibold overflow-scroll'
      ref={divAreaRef}>
      {messages.map((message, index) => {
        console.log(message);

        return message.product ? (
          <>
            <ProductListElement product={message.product} />
            <ChatbotMassage message={message} key={index} />
          </>
        ) : (
          <ChatbotMassage message={message} key={index} />
        );
      })}
    </div>
  );
};
