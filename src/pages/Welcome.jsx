import { useSearchParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Welcome() {
    const [params] = useSearchParams();
    const name = params.get("name");
    const navigate = useNavigate();
    const [animatedText, setAnimatedText] = useState("");

    const greeting = `Welcome, ${name}!`;

    useEffect(() => {
        if (!name) return;

        let index = 0;
        const interval = setInterval(() => {
            setAnimatedText(greeting.slice(0, index + 1));
            index++;
            if (index === greeting.length) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [greeting, name]);

    const handleClose = () => {
        navigate("/");
    };

    // 🔐 Show error if no name is found
    if (!name) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-200 text-red-600 text-xl font-semibold">
                ❌ Page Not Found — Please login first!
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 px-4 relative">
            <div className="bg-white shadow-md rounded-2xl w-full max-w-md p-10 text-center relative">
                <div
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold cursor-pointer"
                >
                    <RxCross2 />
                </div>
                <h1 className="text-3xl font-bold text-blue-600 mb-4 animate-fadeIn">
                    {animatedText}
                </h1>
                <p className="text-gray-600 text-lg">
                    We're glad to have you on board!
                </p>
            </div>
        </div>
    );
}

export default Welcome;
