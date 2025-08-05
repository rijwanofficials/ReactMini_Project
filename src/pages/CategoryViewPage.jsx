import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useSearchParams } from 'react-router';
import ProductCard from '../components/ProductCards';

const categoryMap = {
    Fashion: [
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-dresses",
        "womens-bags",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches"
    ],
    Phone: ["smartphones"],
    Laptop: [
        "laptops",
        "tablets",
        "mobile-accessories"
    ],
    Kitchen: ["kitchen-accessories"],
    Beauty: ["skin-care", "fragrances", "beauty"],
    Groceries: ["groceries"],
    Furniture: ["furniture"],
    Bikes: ["motorcycle"]
};
const CategoryViewPage = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('ui');
    let text = category;

    let capitalized = text.charAt(0).toUpperCase() + text.slice(1);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const apiCategories = categoryMap[category] || [];
            if (apiCategories.length === 0) {
                setProducts([]);
                return;
            }
            try {
                let all = [];
                for (const cat of apiCategories) {
                    const res = await fetch(`https://dummyjson.com/products/category/${cat}`);
                    await new Promise((res) => setTimeout(res, 2000));
                    const data = await res.json();
                    all = [...all, ...data.products];
                }
                setProducts(all);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching category:", error);
                setProducts([]);
            }
        };
        fetchProducts();
    }, [category]);

    const dummyArray = Array(5).fill("Hey");

    return (
        <>
            <Navbar />
            <main className="grid grid-cols-[300px_1fr] gap-6 p-6 pt-16">
                {loading &&
                    (
                        <>
                            <div className="bg-white shadow-md rounded-xl">
                                <div className="bg-gray-200 h-4 w-8 m-5 flex items-center justify-center"></div>
                                <div className="bg-gray-200 h-4 w-8 m-5 flex items-center justify-center"></div>
                                <div className="bg-gray-200 h-4 w-8 m-5 flex items-center justify-center"></div>
                            </div>
                            <div>{
                                dummyArray.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="mb-5 p-5 grid grid-cols-[200px_1fr] gap-5 bg-gray-100 rounded-xl cursor-pointer">
                                            <div className="h-50 w-50 bg-gray-200"></div>
                                            <div className="flex flex-col gap-5">
                                                <p className="h-5 bg-gray-200"></p>
                                                <p className="h-5 bg-gray-200"></p>
                                                <p className="h-5 bg-gray-200"></p>
                                                <p className="h-5 bg-gray-200"></p>
                                                <div className="flex gap-5">
                                                    <p className="h-5 w-40 bg-gray-200"></p>
                                                    <p className="h-5 w-40 bg-gray-200"></p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            </div>
                        </>
                    )
                }
                {!loading && (
                    <>
                        <div className="bg-white shadow-md rounded-2xl">
                            <h2 className="flex font-medium text-2xl items-center m-4">Filter</h2>
                            <p className="ml-4">Categories</p>
                            <p className="ml-4 font-medium">{capitalized}</p>
                        </div>
                        <div>
                            {products.map((elem) => (
                                <ProductCard key={elem.title} {...elem} />
                            ))}
                        </div>
                    </>
                )
                }
            </main>
            <Footer />
        </>
    )
}
export default CategoryViewPage;




