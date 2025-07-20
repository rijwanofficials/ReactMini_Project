import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useParams } from "react-router";
import { BeatLoader } from "react-spinners"

const ViewPage = () => {
    const params = useParams();
    const { productId } = params;
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const getProducts = async () => {
        try {
            setLoading(true);
            const request = await fetch(`https://dummyjson.com/products/${productId}`)
            const data = await request.json();
            setProduct(data);
        }
        catch (err) {
            alert(`Error getting product info:${err.message}`)
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <Navbar />
            <main  >
                {loading ? (<div className=" h-25 flex justify-center items-center">
                    <BeatLoader /></div>) :
                    (<>
                        <p className="text-center mt-5 mb-5 text-2xl">{product.title}</p>
                        <div className=" ml-6 w-fit bg-white shadow-md flex flex-wrap items-center justify-center">
                            {product.images?.map((elem) => {
                                return <img src={elem} key={elem} width={400} />
                            })
                            }
                        </div>
                    </>)}
            </main >
            <Footer />
        </>
    );
};
export default ViewPage;