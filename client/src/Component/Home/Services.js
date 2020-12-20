import React from 'react'
import ServiceDetails from './ServiceDetails';
import fluorideImg from "../../images/fluoride.png"
import cavityImg from "../../images/cavity.png"
import whiteningImg from "../../images/whitening.png"

const serviceData = [
    {
        name: "Fluoride Treatment",
        img: fluorideImg,
        description:"Fluoride is beneficial to teeth because it helps to weakened tooth enamel slow down the loss of minerals from tooth "
    },
    {
        name: "Cavity Filling",
        img: cavityImg,
        description:"Pain or a toothache that happens without warning Sensitive teeth Pain when you eat or drink sweet, hot, or cold thing"
    },
    {
        name: "Teath Whitening",
        img: whiteningImg,
        description:"Practice oil pulling. Oil pulling is a traditional Indian folk remedy meant to improve oral hygiene and remove toxins."
    }
]

const Services = () => {
    return (
      <section className="services-container mt-5 pt-5">
        <div className="text-center">
          <h5 style={{ color: "#1cc7c1" }}>OUR SERVICES</h5>
          <h2>Services We Provide</h2>
        </div>

        <div>
          <div className="d-flex justify-content-center">
            <div className="row w-75 mt-2 pt-5">
              {serviceData.map(service=><ServiceDetails service={service}></ServiceDetails>)}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Services
