import React from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';
import './Organized.css'
import siuCampus from '../img/SIUCAMPUS.jpeg'
import siucse from '../img/Siu Back.jpg'
const Organized = () => {
    
    return (
        <div>
           
            <div className='d-flex justify-content-center og image-hover-zoom zoom' scale="2.0">
                <img src={siuCampus} className='img-fluid' alt="" />
            </div>
            <h2 className='Organized-by '>Organized By</h2>
            <h1 className="versityname">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING (CSE), SIU</h1>
           <button className='main-btn-xyz'>Visit</button>
        </div>
    );
};

export default Organized;