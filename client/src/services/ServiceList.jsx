import React from "react";
import ServiceCard from "./ServiceCard";
import{Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
      {
        imgUrl: weatherImg,
        title: "Hotels/Homestays",
        desc: "Best quality Hotes with best services"
      },

      {
        imgUrl: guideImg,
        title: " Food &Tour Guide",
        desc: "Local tourist guide & Local best food. "
      },

      {
        imgUrl: customizationImg,
        title: "Transportation",
        desc: "Best Transport vechile Bikes or Cars"
      },
]


const ServiceList = () => {
  return ( 
  <>

  {
    servicesData.map((item,index)=> ( 
    <Col lg='3' key={index}>
        <ServiceCard item={item}/>
    </Col>
    ))}
  
  
  </>
    
  );
};

export default ServiceList;