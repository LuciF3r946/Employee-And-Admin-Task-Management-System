import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    // Form state management
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /**
     * Handles form submission
     * @param {Event} e - Form event
     */
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        // Clear form fields after submission
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100">
            {/* Login Card */}
            <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-cyan-300">
                <h2 className="text-2xl font-semibold text-cyan-700 mb-6 text-center">
                    User/Admin Login
                </h2>

                {/* Login Form */}
                <form
                    onSubmit={submitHandler}
                    className="flex flex-col gap-4"
                >
                    {/* Email Input */}
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your Email"
                        className="text-black w-full rounded-md border border-cyan-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                    />

                    {/* Password Input */}
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your Password"
                        className="text-black w-full rounded-md border border-cyan-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-full bg-cyan-600 px-4 py-2 text-white font-medium hover:bg-cyan-700 transition-all"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;