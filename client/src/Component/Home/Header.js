import React from 'react'
import BusinessInfo from './BusinessInfo'
import HeaderMain from './HeaderMain'
import NavBar from '../Shared/NavBar'

const Header = () => {
    return (
        <div className="header-container">
            <NavBar />
            <HeaderMain />
            <BusinessInfo/>
        </div>
    )
}

export default Header
