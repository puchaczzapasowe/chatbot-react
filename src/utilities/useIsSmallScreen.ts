import { useEffect, useState } from 'react';

const checkIsSmallScreen = () => window && window.innerWidth < 768;

const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(checkIsSmallScreen);
  const handleIsSmallScreen = () => {
    setIsSmallScreen(checkIsSmallScreen());
  };
  useEffect(() => {
    window.addEventListener('resize', handleIsSmallScreen);
    return () => window.removeEventListener('resize', handleIsSmallScreen);
  }, []);

  return isSmallScreen;
};
export default useIsSmallScreen;
