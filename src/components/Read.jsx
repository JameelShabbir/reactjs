import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../features/userDetailSlice';
import CustomModal from './CustomModal';
// import deleteUser from '../features/userDetailSlice';
import { deleteUser } from '../features/userDetailSlice';
import { Link } from 'react-router-dom';



const Read = () => {
    const dispatch = useDispatch();
    const { users, loading, searchData } = useSelector((state) => state.app);

    const [id, setId] = useState();
    const [radioData, setRadioData] = useState("");

    const [showPopup, setShowPopup] = useState(false);

    const deleteItem = (id) => {
        dispatch(deleteUser(id));
    }
    useEffect(() => {
        dispatch(showUser());
    }, []);
    if (loading) {
        return (
            <>
                <div className="text-center flex h-screen justify-center">
                    <h1 className="loading loading-ring loading-lg text-sky-500">Loading</h1>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="text-center mt-5">
                <h1 className='text-3xl font-bold mb-5'>All Data</h1>
                <input type="radio"
                    name="gender"
                    className="radio radio-info mr-1 ml-5"
                    checked={radioData === ""}
                    onChange={(e) => setRadioData("")}
                />
                <label htmlFor="all user" className='text-2xl'>All user</label>
                <input type="radio"
                    value="male"
                    name="gender"
                    className="radio radio-info mr-1 ml-5"
                    checked={radioData === "male"}
                    onChange={(e) => setRadioData(e.target.value)}
                />
                <label htmlFor="male" className='text-2xl'>Male</label>
                <input type="radio"
                    name="gender"
                    value="female"
                    className="radio radio-info mr-1 ml-5"
                    checked={radioData === "female"}
                    onChange={(e) => setRadioData(e.target.value)}
                />

                <label htmlFor="male" className='text-2xl'> Female</label>
            </div>
            {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}

            <div className="card w-[500px] mx-auto mt-5  ">
                {users &&
                    users
                        .filter((ele) => {
                            // console.log(searchData);
                            if (!searchData || searchData.length === 0) {
                                return ele;
                            } else {
                                return ele.name
                                    .toLowerCase()
                                    .includes(searchData.toLowerCase());
                            }
                        }).filter((ele) => {
                            if (radioData === "male" || radioData === "Male") {
                                return ele.gender === radioData;
                            } else if (radioData === "Female" || radioData === "female") {
                                return ele.gender === radioData;
                            } else {
                                return ele;
                            }
                        })
                        .map((ele) => (<div key={ele.id} className="card-body relative my-5 rounded-md m bg-neutral items-center text-center">
                            <h2 className="card-title">All User Data!</h2>
                            <div className="dropdown dropdown-left absolute top-[10px] right-[10px] hover:bg-gray-500 w-[30px] rounded-full">
                                <div tabIndex={0} role="button" className=" m-1 "><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-outline w-full btn-success btn-sm" onClick={() => [setId(ele.id), setShowPopup(true)]}>View Data</button>

                                        <Link to={`/edit/${ele.id}`} className="btn btn-outline w-full btn-info btn-sm">Update</Link>
                                        {/* <Link onClick={() => dispatch(deleteUser(ele.id))} className="btn btn-sm">Delete</Link> */}
                                        <button onClick={() => deleteItem(ele.id)} className="btn btn-outline w-full btn-error btn-sm">Delete</button>

                                    </div>
                                </ul>
                            </div>
                            <p>{ele.name}</p>
                            <p>{ele.email}</p>
                            {/* <p>{ele.age}</p> */}
                            <p>{ele.gender}</p>

                        </div>))}

            </div>
        </>
    )
}

export default Read;