import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { RxCross2 } from "react-icons/rx"; // 👈 import icon

const Login = () => {
    const navigate = useNavigate();

    const handleLogIn = () => {
        navigate('/Signup');
    }

    const handleBackToHome = () => {
        navigate('/');
    }
    const [name, setName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handlenameChange = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    useEffect(() => {
        if (isSubmitted) {
            navigate(`/welcome?name=${name}`);
        }
    }, [isSubmitted, navigate]);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 px-4">
                <div className="bg-white shadow-md rounded-2xl w-full max-w-md p-8 relative">

                    {/* Close Icon Top-Right */}
                    <div
                        onClick={handleBackToHome}
                        className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl cursor-pointer"
                    >
                        <RxCross2 />
                    </div>

                    <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                        Welcome Back
                    </h2>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                onChange={handlenameChange}
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            LogIn
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have Account?
                        <span
                            className="text-blue-600 hover:underline cursor-pointer"
                            onClick={handleLogIn}
                        > Create</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
