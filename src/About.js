import React from 'react'
import { Link } from 'react-router-dom'
// import Navigation from './components/Navigation'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    const goTocontact = () => {
        navigate('/contact');
    }
    return (
        <>      
            {/* <Navigation /> */}
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="cursor-pointer bg-base-100 text-3xl p-0">⏩</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to="/">HOME </Link></li>
                        <li><Link to="/About">About </Link></li>

                    </ul>
                </div>
            </div>
            <h1 className='text-center text-3xl mt-5 '>Welcome to About Page</h1>
            <button className='text-center bg-orange-700 p-3 rounded font-bold ml-5 shadow hover:bg-orange-900' onClick={() => goTocontact()} >Contact</button>
            <button className='text-center bg-orange-700 p-3 rounded font-bold ml-5 shadow hover:bg-orange-900 ml-5' onClick={() => { navigate(-1) }}>Back</button>

        </>
    )
}

export default About