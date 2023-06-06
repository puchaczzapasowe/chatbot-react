import { BsFillMouse3Fill } from 'react-icons/bs';
import { GiHamburgerMenu} from 'react-icons/gi';
import { useAppSelector } from '../../store/store';

export const Nav = () => {
  const { menuIsOpen } = useAppSelector((state) => state.header);

  return (
    <nav className='bg-green-600 p-2 flex gap-3 '>
      <div className='flex items-center gap-2 font-bold bg-green-300 p-2 rounded-lg w-fit '>
        <span className='uppercase text-xl   '>chmielsow</span>
        <BsFillMouse3Fill className='text-3xl' />
      </div>
      <ul className='hidden  lg:flex flex-grow gap-5 uppercase font-bold text-xl items-center underline-offset-4 underline'>
        <li className=''>mouse</li>
        <li>about us</li>
        <li>contact</li>
      </ul>

      <button className='lg:hidden text-3xl'>
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};
