import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useSearchParams } from "react-router";
import ProductCard from "../components/ProductCards";
import notfound from "../assets/notfound.png"
const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("text");
    let text = searchText;

    let capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const LIMIT = 10;
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(1);
    const [notFound, setNotFound] = useState(false);


    const getSearchResult = async () => {
        try {
            const skip = LIMIT * (page - 1);
            setLoading(true);
            // setNotFound(false);
            const response = await fetch(
                `https://dummyjson.com/products/search?q=${searchText}&limit=${LIMIT}&skip=${skip}`
            );
            const data = await response.json();
            console.log(data);
            if (!data.products || data.products.length === 0) {
                setNotFound(true);
                setProducts([]);
                setTotalItems(0);
                setLoading(false);
                return;
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setProducts(data.products);
            setTotalItems(data.total);
        }
        catch (err) {
            alert(`Can't get search results: ${err.message}`)
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getSearchResult();
    }, [searchText, page])
    const dummyArray = Array(5).fill("Hello");
    const totalPages = Math.ceil(totalItems / LIMIT);
    const dummyArrayForPagination = Array(totalPages).fill("hi");
    return (
        <>
            <Navbar />
            {notFound && (
                <>
                    <div className="h-screen flex items-center mt-20 flex-col">
                        <img src={notfound} width={300} alt="not found" />
                        <p className="text-red-500 font-bold mr-6">Sorry, no results found!</p>
                    </div>
                </>
            )}
            <main className="grid grid-cols-[300px_1fr] gap-6 p-6 pt-16">
                {loading && !notFound &&
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
                {!loading && !notFound && (
                    <>
                        {/* * ********Filter******************* */}
                        <div className="bg-white  shadow-md rounded-2xl">
                            <h2 className="flex font-medium text-2xl items-center m-4">Filter</h2>
                            <p className="ml-4">Categories</p>
                            <p className="ml-4 font-medium">{capitalized}</p>
                            <br />
                            <br />
                            {/* <div className="flex flex-col gap-5">
                                <button className="bg-blue-400">Phone</button>
                                <button className="bg-blue-400">Bike</button>
                                <button className="bg-blue-400">Laptop</button>
                                <button className="bg-blue-400">Fashion</button>
                                <button className="bg-blue-400">Beauty</button>
                                <button className="bg-blue-400">Kitchen</button>
                                <button className="bg-blue-400">Furniture</button>
                                <button className="bg-blue-400">Groceries</button>
                            </div> */}
                        </div>
                        <div>
                            {products.map((elem) => (
                                <ProductCard key={elem.title} {...elem} />
                            ))}
                        </div>
                    </>)
                }
            </main >
            <div className="pb-4 flex flex-wrap gap-5 items-center justify-center">
                {
                    dummyArrayForPagination.map((item, idx) => {
                        return (
                            <button key={idx}
                                className="py-2 mb-10 px-4 bg-blue-700 text-white rounded-md cursor-pointer mx-1"
                                onClick={() => setPage(idx + 1)}>
                                {idx + 1}
                            </button>
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}
export default SearchPage;