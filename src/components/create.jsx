import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [users, setUsers] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
        // console.log(e.target.name)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users)
        dispatch(createUser(users))
        navigate("/Read")
    };
    return (
        <>
            <div className="flex justify-center items-center flex-col h-screen">
                <h1 className='text-4xl text-center font-bold mb-5'>Add Users</h1>
                <div className="bg-neutral border-y-4 border-sky-300 p-6 rounded-lg shadow-md w-[500px]">
                    <h2 className="text-2xl font-semibold mb-4">User Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="input input-bordered input-success w-full max-w-md"
                                placeholder="John Doe"
                                onChange={getUserData}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input input-bordered input-success w-full max-w-md"
                                placeholder="john@example.com"
                                onChange={getUserData}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="age" className="block text-white text-sm font-bold mb-2">
                                Age
                            </label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                className="input input-bordered input-success w-full max-w-md"
                                placeholder="25"
                                onChange={getUserData}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-white text-sm font-bold mb-2">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                className="input input-bordered input-success w-full max-w-md"
                                onChange={getUserData}
                            >
                                <option value="male">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-outline btn-success w-32"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create