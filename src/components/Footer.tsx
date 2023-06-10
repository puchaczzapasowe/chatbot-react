import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='container mx-auto py-8 px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>O nas</h3>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Nawigacja</h3>
            <ul className='space-y-2'>
              <li>
                <a href='/' className='text-sm hover:text-gray-400'>
                  Strona główna
                </a>
              </li>
              <li>
                <a href='/o-nas' className='text-sm hover:text-gray-400'>
                  O nas
                </a>
              </li>
              <li>
                <a href='/kontakt' className='text-sm hover:text-gray-400'>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className='text-lg font-semibold mb-4'>Kontakt</h3>
            <p className='text-sm'>Adres: 1234 ul. Przykładowa, Miasto</p>
            <p className='text-sm'>Telefon: 123-456-789</p>
            <p className='text-sm'>E-mail: kontakt@example.com</p>
          </div>
        </div>
        <hr className='my-6 border-gray-700' />
        <p className='text-center text-sm'>
          &copy; {new Date().getFullYear()} My Awesome Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
