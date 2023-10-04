import { useDispatch } from "react-redux";
import { star } from "../assets/icons";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { addToCart } from "../redux/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
const PopularProductCard = (data) => {
  const dispatch = useDispatch();
  const handleAddProduct = (dataToCart) => {
    dispatch(addToCart(dataToCart))
  }
  const notify = () => toast("Product Added Successfully");
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={data?.product?.imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {data?.product?.name}
      </h3>
      <div className="flex gap-5">
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
          {data?.product?.price}
        </p>
        <span onClick={() => { handleAddProduct(data?.product); notify() }} className="mt-4 text-xl font-bold">
          <AiOutlineShoppingCart />
        </span>
      </div>
    </div>
  );
};

export default PopularProductCard;
