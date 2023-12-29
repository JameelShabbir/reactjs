import React from 'react'
import Navigation from './components/Navigation'
import { Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default Home