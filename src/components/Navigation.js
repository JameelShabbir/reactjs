import React, { useEffect, useState } from 'react'
import '../App.css';
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../features/userDetailSlice';
const Navigation = () => {
    const allUsers = useSelector((state) => state.app.users);
    const dispatch = useDispatch();
    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        dispatch(searchUser(searchData));
    }, [searchData])
    // console.log(searchData)
    return (

        <>
            <header>
                <nav className="navbar bg-base-200">
                    <div className="flex-1">
                        <NavLink to="/" className="btn btn-ghost text-xl">CodeCrum</NavLink>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="navbar-center hidden lg:flex mx-auto">
                            <ul className="menu menu-horizontal px-1">
                                <li><NavLink to="/"><a>HOME</a></NavLink></li>
                                <li><NavLink to="/about"><a>ABOUT</a></NavLink></li>
                                <li className='w-40 relative dropdown '>
                                    <details>
                                        <summary>ALL USERS ({allUsers.length})</summary>
                                        <ul className="p-2 absolute top-4">
                                            <li><Link to='/'>Create Post</Link></li>
                                            <li><Link to='/Read'>All Post</Link></li>
                                        </ul>
                                    </details>
                                </li>

                                <li><NavLink to="/contact"> CONTACT US</NavLink></li>
                                <li className='form-controle lg:w-96'>
                                    <input type="text"
                                        placeholder="Search"
                                        className="input input-sm mx-3 input-bordered w-24 md:w-auto"
                                        onChange={(e) => dispatch(searchUser(setSearchData(e.target.value)))}
                                    />
                                </li>
                                <li><NavLink to="/Login"> Login/Signup</NavLink></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-end lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navigation