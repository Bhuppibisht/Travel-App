import React from "react";
import "../styles/home.css"


import {Container , Row , Col} from 'reactstrap';
import herovideo02 from '../assets/images/hero-video02.mp4'
import herovideo from '../assets/images/hero-video03.mp4'
import herovideo03 from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'


import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";



 const Home = () => {
  return<>

  {/*=========hero section start==========*/}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero_content">
            <div className="hero_subtitle d-flex align-items-center" >
              <Subtitle Subtitle={'know Before You Go'}/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Travelling opens the door to creating <span className="highlight">memories</span></h1>
            <p>Embark on a journey of discovery as you explore the wonders of travel and hiking. Let the trails lead you to breathtaking landscapes, where every step unveils a new adventure. Whether it's the serenity of a mountain peak or the charm of a hidden path, embrace the joy of exploration. Travel not only broadens your horizons but also nourishes the soul. So, lace up your boots, breathe in the fresh air, and let the world be your destination. Happy trails!</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box">
          <video src={herovideo02} alt="" controls />
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero_img-box mt-4">
            <video src={herovideo} alt="" controls />
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero_img-box mt-5">
            <video src={herovideo03} alt="" controls  />
          </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/*=========hero section end==========*/}
  <section>
    <Container>
      <Row>
        <Col lg = '3'> 
        <h5 className="services_subtitle">what we serve</h5>
        <h2 className="service_title">we offer a best service in tgof</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>
    {/* ===========featured tour section start========== */}
    <section>
       <Container>
        <Row>
          <Col lg ='12' className="mb-5">
            <Subtitle Subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our Featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section> 
    {/* ===========featured tour section start========== */}

    {/* {======== experience section start =======} */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience_content">
              <Subtitle Subtitle={'Experience'}/>

              <h2>With our all experience <br/> We will serve you</h2>
              <p> Navigating the world through the lens of a travel company is an exhilarating journey. Every itinerary crafted, each adventure planned, and the smiles of satisfied travelers become the heartbeat of our experience. From turning dreams into itineraries to creating memories that span continents, running a travel company is a testament to the power of exploration and connection. It's not just about destinations; it's about curating moments that last a lifetime. Cheers to the joy of turning wanderlust into reality!
                <br/>
                 </p>
            </div>

            <div className="counter_wrapper d-flex align-items-center gap-5">
              <div className="counter_box">
                <span>3k+</span>
                <h6>Sucessfull Trip</h6>
              </div>
              <div className="counter_box">
                <span>500+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter_box">
                <span>1.5</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience_img">
              <img src={experienceImg} alt=""  />
            </div>
          </Col>
        </Row>
      </Container> 
     </section>
 {/* {======== experience section end =======} */}
    
     {/* {======== gallery section start =======} */}

     <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle Subtitle={'Gallery'}/>
            <h2 className="gallery_title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>

          <MasonryImagesGallery/>


          </Col>
        </Row>
      </Container>
     </section>

     {/* {======== gallery section end =======} */}

     {/* {======== testimonial section start =======} */}

     <section>
      <Container>
        <Row>
          <Col lg ='12'>
          <Subtitle Subtitle={'Fans Love-:'}/>
            <h2 className="testimonial_title">What our fans say about us</h2>
          </Col>
          <Col lg="12">
            <Testimonials/>
          </Col>
        </Row>
      </Container>
     </section>




     {/* {======== testimonial section end =======} */}
    <Newsletter/>
  </>
 };
 export default Home;