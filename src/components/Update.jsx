import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from '../features/userDetailSlice';

const Update = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateData, setUpdateData] = useState();

    const { users, loading } = useSelector((state) => state.app);

    useEffect(() => {
        if (id) {
            const singleUser = users.find((ele) => ele.id === id);

            console.log('singleUser', singleUser);
            setUpdateData(singleUser)
        }
    }, []);
    // console.log(updateData)

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read")
    };


    return (
        <>
            <div className="flex justify-center items-center flex-col h-screen">
                <h1 className='text-4xl text-center font-bold mb-5'>Update The Data</h1>
                <div className="bg-neutral border-sky-300 border-y-4 p-6 rounded-lg shadow-md w-[500px]">
                    <h2 className="text-2xl font-semibold mb-4">User Information</h2>
                    <form onSubmit={handleUpdate}>
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
                                value={updateData && updateData.name}
                                onChange={newData}
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
                                value={updateData && updateData.email}
                                onChange={newData}
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
                                value={updateData && updateData.age}
                                onChange={newData}
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
                                value={updateData && updateData.gender}
                                onChange={newData}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-outline btn-success w-32"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update