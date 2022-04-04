import React from 'react';
import './Bg.css';
import bg from '../img/Bgphoto.jpg'
const Bg = () => {
    return (
        <div >
            <img src={bg} alt=""  className='img-fluid'/>
        </div>
    );
};

export default Bg;