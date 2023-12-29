import React from 'react'
// import Navigation from './components/Navigation'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <>
            {/* <Navigation /> */}
            <div className="flex justify-center items-center h-screen bg-gray-900">
                <div className="bg-slate-800 p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border-2 bg-gray-900 outline-none border-indigo-400 rounded"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                                Your Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border-2 bg-gray-900 outline-none border-indigo-400 rounded"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 border-2 bg-gray-900 outline-none border-indigo-400 rounded"
                                placeholder="Your password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-white text-sm font-medium mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full p-2 border-2 bg-gray-900 outline-none border-indigo-400 rounded"
                                placeholder="Confirm password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            >
                                Sign Up
                            </button>
                            <p className='mt-5 text-white'>I have an Account! <Link to="/Login" className='text-sky-500 hover:border-l-8 hover:border-indigo-400 font-bold hover:bg-white p-1 rounded'>Login</Link> </p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Signup