import React from 'react';
import './CustomModal.css';
import { useSelector } from 'react-redux';

const CustomModal = ({ id, showPopup, setShowPopup }) => {
    const allUsers = useSelector((state) => state.app.users);

    const singleUser = allUsers.find((user) => user.id === id);

    if (!singleUser) {
        // User not found, handle this case (e.g., display an error message)
        return (
            <>
                <div className="modalbackground">
                    <div className="modalcontainer glass">
                        <button onClick={() => setShowPopup(false)}>❌</button>
                        <p className='text-[red]' >User not found</p>
                    </div>
                </div>
            </>
        );
    }

    const handleClose = () => {
        // Implement the close functionality here
        setShowPopup(false);
    };

    return (
        <>
            <div className="modalbackground">
                <div className="modalcontainer  border border-sky-500">
                    <button onClick={handleClose}>❌</button>
                    <div className="text-center glass p-5 rounded-lg">
                        <h1 className='text-3xl font-bold text-green-700'>User Information</h1>
                        <p className='mt-5 font-bold text-2xl p-2'>Id : {singleUser.id}</p>
                        <p className=' text-1xl p-2'>Name : {singleUser.name}</p>
                        <p className=' text-1xl p-2'>Email : {singleUser.email}</p>
                        <p className=' text-1xl p-2'>Age : {singleUser.age}</p>
                        <p className=' text-1xl p-2'>Gender : {singleUser.gender}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomModal;
