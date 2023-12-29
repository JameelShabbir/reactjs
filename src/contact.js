import React from 'react'

const Contact = () => {
    return (
        <>

            <h1 className='text-center text-3xl bg-gray-800 mt-0 pt-5 font-bold'>Welcome to Contact Us Page</h1>
            <div className="flex justify-center items-center h-screen bg-gray-800">
                <div className=" p-8 rounded shadow-lg sm:w-1/3 w-screen mx-5 bg-slate-700">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border bg-gray-800 outline-none border-gray-500 rounded"
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
                                className="w-full p-2 border bg-gray-800 outline-none border-gray-500 rounded"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full p-2 border bg-gray-800 outline-none border-gray-500 rounded"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full p-2 border bg-gray-800 outline-none border-gray-500 rounded"
                                placeholder="Your message"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 font-bold "
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact