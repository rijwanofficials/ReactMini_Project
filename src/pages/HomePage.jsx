import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import electronicsImg from '../assets/electronics1.jpg';
import appliances from '../assets/bike.jpg';
import mobile from '../assets/mobile.jpg';
import fashion2 from '../assets/fashion2.jpg';
import Beauty from '../assets/beauty.jpg';
import Kitchen from '../assets/kitchen.jpg';
import Furniture from '../assets/furniture.jpg';
import Grocery from '../assets/grocery1.png';
import photo from '../assets/home.jpg';

import { useNavigate } from 'react-router';
import { useEffect, useState } from "react";




const HomePage = () => {
    const [product, setProducts] = useState([]);
    const getElectronics = async () => {
        const response = await fetch(
            'https://dummyjson.com/products/category/laptops'
        );
        const data = await response.json();
        console.log(data);
        const updatedProducts = data.products.map(item => {
            const firstWord = item.title.split(" ")[0];
            const formattedTitle =
                firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();
            return {
                ...item,
                title: formattedTitle
            };
        });

        setProducts(updatedProducts);

    };


    useEffect(() => {
        getElectronics();
    }, [])
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <main>
                <div className="flex flex-wrap m-2 gap-6 justify-center items-center p-6 bg-gray-100">

                    <div className="w-30 h-30 bg-white flex flex-col justify-center items-center rounded-md cursor-pointer"
                        data-category="Phone"
                        onClick={(e) => {
                            const uiCategory = e.currentTarget.dataset.category;
                            console.log(uiCategory);
                            navigate(`/categories?ui=${encodeURIComponent(uiCategory)}`);
                        }}>
                        <img src={mobile} alt="Electronics" className="w-18 h-18 mb-2" />
                        <span className="text-sm font-medium">Phone</span>
                    </div>

                    <div className="w-30 h-30 bg-white flex flex-col justify-center items-center rounded-md  cursor-pointer"
                        data-category="Bikes"
                        onClick={(e) => {
                            const uiCategory = e.currentTarget.dataset.category;
                            console.log(uiCategory);
                            navigate(`/categories?ui=${encodeURIComponent(uiCategory)}`);
                        }}>
                        <img src={appliances} alt="Electronics" className="w-22 h-16 mb-2" />
                        <span className="text-sm font-medium">Bikes</span>
                    </div>

                    <div className="w-30 h-30 bg-white flex flex-col justify-center items-center rounded-md cursor-pointer"
                        data-category="Laptop"
                        onClick={(e) => {
                            const uiCategory = e.currentTarget.dataset.category;
                            console.log(uiCategory);
                            navigate(`/categories?ui=${encodeURIComponent(uiCategory)}`);
                        }}>
                        <img src={electronicsImg} alt="Electronics" className="w-18 h-18 mb-2" />
                        <span className="text-sm font-medium">Laptop</span>
                    </div>
                    <div className="w-30 h-30 bg-white flex flex-col justify-center items-center rounded-md cursor-pointer"
                        data-category="Fashion"
                        onClick={(e) => {
                            const uiCategory = e.currentTarget.dataset.category;
                            console.log(uiCategory);
                            navigate(`/categories?ui=${encodeURIComponent(uiCategory)}`);
                        }}>
                        <img src={fashion2} alt="Electronics" className="w-18 h-18 mb-2 rounded-xl" />
                        <span className="text-sm font-medium">Fashion</span>
                    </div>

                    <div className="w-30 h-30 bg-white flex flex-col justify-center items-center rounded-md cursor-pointer"
                        data-category="Beauty"
                        onClick={(e) => {
                            const uiCategory = e.currentTarget.dataset.category;
                            console.log(uiCategory);
                            navigate(`/categories?ui=${encodeURIComponent(uiCategory)}`);
                        }}>
                        <img src={Beauty} alt="Electronics" className="w-18 h-18 mb-2 rounded-xl" />
                        <span className="text-sm font-medium">Beauty</span>
                    </div>

                    <div className="w-30 h-30 bg-white flex flex-col justify-center items-center rounded-md cursor-pointer"
                        data-category="Kitchen"
                        onClick={(e) => {
                            const uiCategory = e.currentTarget.dataset.category;
                            console.log(uiCategory);
                            navigate(`/categories?ui=${encodeURIComponent(uiCategory)}`);
                        }}>
                        <img src={Kitchen} alt="Electronics" className="w-18 h-18 mb-2 rounded-xl" />
                        <span className="text-sm font-medium">Kitchen</span>
                    </div>

                    <div className="w-30 h-30 bg-white flex flex-col justify-center items-center rounded-md cursor-pointer"
                        data-category="Furniture"
                        onClick={(e) => {
                            const uiCategory = e.currentTarget.dataset.category;
                            console.log(uiCategory);
                            navigate(`/categories?ui=${encodeURIComponent(uiCategory)}`);
                        }}>
                        <img src={Furniture} alt="Electronics" className="w-18 h-18 mb-2 rounded-xl" />
                        <span className="text-sm font-medium">Furniture</span>
                    </div>

                    <div className="w-30 h-30 bg-white flex flex-col justify-center items-center rounded-md cursor-pointer"
                        data-category="Groceries"
                        onClick={(e) => {
                            const uiCategory = e.currentTarget.dataset.category;
                            console.log(uiCategory);
                            navigate(`/categories?ui=${encodeURIComponent(uiCategory)}`);
                        }}>
                        <img src={Grocery} alt="Electronics" className="w-18 h-18 mb-2 rounded-xl" />
                        <span className="text-sm font-medium">Groceries</span>
                    </div>
                </div>
                <div className="m-2">
                    <div className="bg-white shadow-md w-full h-59 rounded-lg">
                        <img src={photo} alt="img" />
                        <div className="h-2 w-2"></div>
                    </div>
                </div>
            </main >
            <div className="ml-2 px-2">
                <h2 className="font-bold text-2xl sm:text-3xl mb-4">Laptops</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {product.map((item, idx) => (
                        <div key={idx} className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-30 object-contain mb-3" />
                            <h1 className="font-bold text-center text-sm">{item.title}</h1>
                            <p className="font-medium text-center text-sm">From ₹{Math.ceil(item.price * 85)}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}


export default HomePage