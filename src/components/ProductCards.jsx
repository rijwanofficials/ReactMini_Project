import { useNavigate } from 'react-router';
import { IoStar } from "react-icons/io5";
const ProductCard = (props) => {
    const roundToOneDecimal = num => Math.floor(num * 10) / 10;
    const { title, price, thumbnail, id, rating, stock } = props;
    const navigate = useNavigate();
    const handleClickProduct = () => {
        navigate(`/${id}/view`)
    }
    return (
        <div className="mb-5 p-5 grid grid-cols-[200px_1fr] bg-white shadow-md rounded-xl cursor-pointer relative " onClick={handleClickProduct}>
            <div className='h-50'><img src={thumbnail} height="100%" /></div>
            <div className='flex '>
                <div className='ml-2 relative w-full'>
                    <p className='font-bold text-md'>{title}</p>
                    <div className='mt-3 h-5 flex w-10  items-center p-1 rounded-xs relative  text-xs font-medium text-white bg-green-700'>
                        <div>{roundToOneDecimal(rating)}</div>
                        <div><IoStar className='absolute top-1.5 right-1' size={11} /></div>
                    </div>
                    <p className='mt-3 text-gray-400 font-medium'>Ratings:{Math.ceil(111 + Math.random() * rating)}</p>
                    <p className='absolute bottom-2 font-medium'>Stock Left: {stock}</p>
                </div>
                <h1 className='absolute right-40 font-bold text-lg'>Rs.{Math.ceil(price * 85)}₹</h1>
                {/* <div><p>30 % OFF</p></div> */}
            </div>
        </div>
    )
}
export default ProductCard;