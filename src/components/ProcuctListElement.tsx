import { Product } from '../../types/database';

const ProductListElement = ({ product }: { product: Product }) => {
  const { Cena, Zdjecie, Marka, Model } = product;
  console.log(Zdjecie);

  return (
    <div className='w-full   border-black border-2'>
      <div
        className='w-full  aspect-video bg-cover '
        style={{
          backgroundImage: `url(/public/${Zdjecie})`,
        }}>
        <h3>
          {Marka} {Model}
        </h3>
      </div>
      <span>{Cena}$</span>
    </div>
  );
};
export default ProductListElement;
