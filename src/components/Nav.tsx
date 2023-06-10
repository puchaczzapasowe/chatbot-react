import { BsFillMouse3Fill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAppSelector } from '../../store/store';
import useIsSmallScreen from '@/utilities/useIsSmallScreen';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setMenuIsOpen } from '../../store/headerSlice';
import { useOnClickOutside } from 'usehooks-ts';
export const Nav = () => {
  const { menuIsOpen } = useAppSelector((state) => state.header);
  const dispatch = useDispatch();
  const isSmallScreen = useIsSmallScreen();
  const menuRef = useRef(null);
  useEffect(() => {
    if (!isSmallScreen) {
      dispatch(setMenuIsOpen(false));
    }
  }, []);
  useOnClickOutside(menuRef, () => {
    if (isSmallScreen && menuIsOpen) {
      dispatch(setMenuIsOpen(false));
    }
  });

  return (
    <nav className='bg-green-400 p-2 flex gap-3 '>
      <div className='flex items-center gap-2 font-bold text-green-400 bg-slate-800 p-2 rounded-lg w-fit '>
        <span className='uppercase text-xl  '>chmielsow</span>
        <BsFillMouse3Fill className='text-3xl' />
      </div>
      <ul className='hidden  md:flex flex-grow gap-5 uppercase font-bold text-xl items-center underline-offset-4 underline'>
        <li>products</li>
        <li>about us</li>
        <li>contact</li>
      </ul>
      <button
        className='md:hidden text-3xl'
        onClick={() => dispatch(setMenuIsOpen(true))}>
        <GiHamburgerMenu />
      </button>
      {menuIsOpen && isSmallScreen && (
        <ul
          className='fixed left-0 top-0 bottom-0  flex flex-col gap-10 bg-green-400 uppercase font-bold text-3xl items-center  z-10 min-w-[300px] py-16 underline-offset-4 underline border-r-8 border-black'
          ref={menuRef}>
          <li>products</li>
          <li>about us</li>
          <li>contact</li>
        </ul>
      )}
    </nav>
  );
};
