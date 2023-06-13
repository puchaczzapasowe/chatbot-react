const ProductsPage = () => {
  return (
    <main className='max-w-[1200px] m-auto flex'>
      <header>Click and Explore: A World of Computer Mouse Marvels</header>
      <div>
        <h3>Select Your Mouse</h3>
      <div className="border-2 border-black ">



      </div>
        


      </div>
    </main>
  );
};

interface ProductCardProps {
  img: string;
  name: string;
  price: string;
}

const ProductCard = ({ img, name, price }: ProductCardProps) => {
  return (
    <div className='flex aspect-[1/2] border-2 border-black'>
      <h3>{name}</h3>
      <div
        style={{
          backgroundImage: `url{${img}}`,
        }}
        className='max-h-[100px] aspect-square cover'></div>
      <span>{price}$</span>
    </div>
  );
};

export default ProductsPage;
