import MainSwiper from '@/components/main/MainSwiper';
import axios from 'axios';
import { Product } from '@/../types/database';
import { useQuery } from '@tanstack/react-query';
import ProductListElement from '@/components/ProcuctListElement';
const fetchMouse = async () => {
  const res = await axios.get('http://localhost:5000/api/products');
  console.log(res);

  return res.data?.products as Product[];
};

const Home = () => {
  const { data, isLoading } = useQuery(['mouse'], fetchMouse);
  console.log(data);

  return (
    <main className='max-w-[1400px] h-auto w-full m-auto flex flex-col'>
      <MainSwiper />
      <div className='border-2 h-max border-black m-2 flex flex-grow md:flex-row flex-nowrap p-2'>
        {data &&
          data.slice(0, 3).map((product) => {
            return <ProductListElement product={product} />;
          })}
      </div>
    </main>
  );
};

export default Home;
