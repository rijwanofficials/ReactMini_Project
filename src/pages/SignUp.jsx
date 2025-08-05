import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false); // ✅ Fixed
    const [name, setName] = useState(""); // ✅ Fixed
    const [email, setEmail] = useState(""); // ✅ Fixed

    const navigate = useNavigate();

    const handleSignUP = () => {
        navigate('/Login');
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handlenameChange = (e) => {
        setName(e.target.value);
    };

    const handleemailChange = (e) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        if (isSubmitted) {
            navigate(`/welcome?name=${name}&email=${email}`);
        }
    }, [isSubmitted, name, email, navigate]);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 px-4">
            <div className="bg-white shadow-md rounded-2xl w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Welcome to Snap Cart
                </h2>
                <p className="text-2xl text-center text-blue-600 mb-6">Create your account</p>

                <form className="space-y-5" onSubmit={handleSignupSubmit}>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onChange={handlenameChange}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onChange={handleemailChange}
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
                        Submit
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Allready have account ? <a href="#" className="text-blue-600 hover:underline" onClick={handleSignUP}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;