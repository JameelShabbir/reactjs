import React from 'react'
// import Navigation from './components/Navigation'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            {/* <Navigation /> */}
            <div className="flex justify-center items-center h-screen bg-gray-900">
                <div className="bg-slate-800 p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                                Email Address
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
                                className="w-full p-2 bg-gray-900 border-2 border-indigo-400 rounded"
                                placeholder="Your password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            >
                                Sign In
                            </button>
                            <p className='mt-5 text-white'>I have an Account! <Link to="/Signup" className='text-sky-500 hover:border-b-4 hover:border-sky-600 hover:bg-white font-bold p-1 rounded'>Signup</Link> </p>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login