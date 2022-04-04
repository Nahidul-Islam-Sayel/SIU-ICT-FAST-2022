import React from 'react';
import './G.css'
import picture from '../img/Bgphoto.jpg'
const Output = (props) => {
    const{img,name}=props.data;
    console.log(props.data.name)
    return (
        <div className='xyz'>
            <img src={img} className="picturesize"  alt=""/>
            <h5 className="font-g img-fluid">{name}</h5>
        </div>
    );
};

export default Output;