import React from 'react'
import InfoCard from './InfoCard'
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
const infoData = [
    {
        title: "Opening Hours",
        description: "We are open 7 days",
        icon: faClock,
        background:"primary"
    },
    {
        title: "Visit Our Location",
        description: "Brooklyn, NY 10053 USA",
        icon: faMapMarker,
        background:"dark"
    },
    {
        title: "Call Us Now",
        description: "+157385629535",
        icon: faPhone,
        background:"primary"
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
            {
                infoData.map(info => <InfoCard info={info}>
                    
                </InfoCard>)
            }
            </div>
        </section>
    )
}

export default BusinessInfo
