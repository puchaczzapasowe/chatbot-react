import { BiBot } from 'react-icons/bi';

export const ChatbotHeader = ({ close }: { close: () => void }) => {
  return (
    <div className='flex w-full justify-between  h-min border-b-2 flex-grow-0 border-black '>
      {' '}
      <h2 className='flex justify-center items-center text-[1.5em] '>
        <BiBot /> Bot Damian
      </h2>
      <button
        className='text-[2em] h-[1.7em] aspect-square bg-red-600'
        onClick={close}>
        x
      </button>
    </div>
  );
};
