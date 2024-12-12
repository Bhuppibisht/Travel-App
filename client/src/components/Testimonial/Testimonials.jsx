import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-01.jpg";
import ava02 from "../../assets/images/ava-02.jpg";
import ava03 from "../../assets/images/ava-03.jpeg";

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
            breakpoint: 992,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },

            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                   
                },
    
                },
        ]

    }
  return( 
  <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>
        Unforgettable! Our journey with [Your Travel Company] was nothing short of spectacular. From meticulously planned itineraries to seamless execution, every detail was thoughtfully considered. The destinations were breathtaking, accommodations top-notch, and the experiences, truly enriching. What set them apart was the exceptional customer service – responsive, friendly, and always going the extra mile. Our hearts are filled with gratitude for the memories created. Thank you, [Your Travel Company], for turning our travel dreams into a flawless reality. Looking forward to more adventures with you
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt=""  />
        
        <div>
             <h5 className="mb-0 mt-3">B Bisht </h5>
             <p>Coustmer</p>
        </div>
     </div>
        

    </div>
    <div className="testimonial py-4 px-3">
        <p>
        "Hiking with [Your Trekking Company] was an absolute delight! The trekking buddies assigned to our group were not just guides but companions on an incredible journey. Their expertise and passion for the trails were evident, ensuring a safe and enjoyable experience. From navigating challenging terrains to sharing fascinating insights about the surroundings, they added an extra layer of richness to our adventure. Kudos to [Your Trekking Company] for assembling a team that goes beyond expectations. Our trek was not just about conquering peaks but forging lasting connections. Can't wait for the next expedition with these amazing trekking buddies!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt=""  />
        
        <div>
             <h5 className="mb-0 mt-3">Riya</h5>
             <p>Coustmer</p>
        </div>
     </div>
        

    </div>
    <div className="testimonial py-4 px-3">
        <p>
        "Hiking with [Your Trekking Company] was an absolute delight! The trekking buddies assigned to our group were not just guides but companions on an incredible journey. Their expertise and passion for the trails were evident, ensuring a safe and enjoyable experience. From navigating challenging terrains to sharing fascinating insights about the surroundings, they added an extra layer of richness to our adventure. Kudos to [Your Trekking Company] for assembling a team that goes beyond expectations. Our trek was not just about conquering peaks but forging lasting connections. Can't wait for the next expedition with these amazing trekking buddies!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt=""  />
        
        <div>
             <h5 className="mb-0 mt-3">Bhuppi Bisht</h5>
             <p>Coustmer</p>
        </div>
     </div>
        

    </div>


    <div className="testimonial py-4 px-3">
        <p>
        Unforgettable! Our journey with [Your Travel Company] was nothing short of spectacular. From meticulously planned itineraries to seamless execution, every detail was thoughtfully considered. The destinations were breathtaking, accommodations top-notch, and the experiences, truly enriching. What set them apart was the exceptional customer service – responsive, friendly, and always going the extra mile. Our hearts are filled with gratitude for the memories created. Thank you, [Your Travel Company], for turning our travel dreams into a flawless reality. Looking forward to more adventures with you
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt=""  />
        
        <div>
             <h5 className="mb-0 mt-3"> B Bisht</h5>
             <p>Coustmer</p>
        </div>
     </div>
        

    </div>


    <div className="testimonial py-4 px-3">
        <p>
        "Hiking with [Your Trekking Company] was an absolute delight! The trekking buddies assigned to our group were not just guides but companions on an incredible journey. Their expertise and passion for the trails were evident, ensuring a safe and enjoyable experience. From navigating challenging terrains to sharing fascinating insights about the surroundings, they added an extra layer of richness to our adventure. Kudos to [Your Trekking Company] for assembling a team that goes beyond expectations. Our trek was not just about conquering peaks but forging lasting connections. Can't wait for the next expedition with these amazing trekking buddies!" 
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt=""  />
        
        <div>
             <h5 className="mb-0 mt-3">Bhuppi Bisht</h5>
             <p>Coustmer</p>
        </div>
     </div>
        

    </div>


    <div className="testimonial py-4 px-3">
        <p>
        Exceptional service from start to finish! [Your Travel Company] transformed our vacation into an extraordinary adventure. Impeccable planning, breathtaking destinations, and a level of customer care that exceeded all expectations. Every detail was carefully curated, ensuring a seamless and unforgettable experience. Can't wait to embark on another journey with them
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt=""  />
        
        <div>
             <h5 className="mb-0 mt-3">Riya</h5>
             <p>Coustmer</p>
        </div>
     </div>
        

    </div>
    
  </Slider>

  );
    
  
};

export default Testimonials;