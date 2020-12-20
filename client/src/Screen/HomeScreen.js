import React from 'react'
import Blogs from '../Component/Home/Blogs'
import Contact from '../Component/Home/Contact'
import Doctors from '../Component/Home/Doctors'
import FeaturedService from '../Component/Home/FeaturedService'

import Header from '../Component/Home/Header'
import MakeAppointment from '../Component/Home/MakeAppointment'
import Services from '../Component/Home/Services'
import Testimonials from '../Component/Home/Testimonials'
import Footer from '../Component/Shared/Footer'

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <Services /> 
            <FeaturedService />
            <MakeAppointment />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Contact />
            <Footer/>
        </div>
    )
}

export default HomeScreen
