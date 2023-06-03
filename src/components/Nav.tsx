import { useAppSelector } from "../../store/store";

export const Nav = () => {
  const {menuIsOpen} = useAppSelector(state=>state.header)
	
	return (
	

    <>
      <nav className='lg:hidden'></nav>
      <nav className='hidden lg:visible'></nav>
    </>
  );
};
