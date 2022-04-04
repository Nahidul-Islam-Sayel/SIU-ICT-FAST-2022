import React from 'react';
import Gallary from '../Data/GallaryData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Output from './Output'
const G = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div className='xyz'>
            <h1 className='Header'>GALLARY</h1>
          <Slider {...settings} className="pictik">{
     Gallary.map(data=><Output data={data}></Output>)
      }
        
      </Slider>
        </div>
    );
};

export default G;