import React, { useRef } from 'react';
import './Form.css';
import { FcHome , FcFeedback , FcPhone } from "react-icons/fc";
const Contract = () => {
    return (
        <section className="contact">
         
      <section className="section-center clearfix">
      <h1 className='Header'>CONTACT US</h1>
        <article className="contact-info">
          <div className="contact-item">
            <h1 className="text">
              <span className="contact-icon">
                <FcHome/></span>address
            </h1>
            <h6 className="contact-text">
            Shamimabad, Bagbari, Sylhet - 3100 Bangladesh
            </h6>
          </div>
          <div className="contact-item">
            <h6 className="text">
              <span class="contact-icon"> <FcFeedback/> </span
              >email
            </h6>
            <h6 class="">
              CSE@gmail.com
            </h6>
          </div>
          <div className="contact-item">
            <h3 className="text">
              <span className="contact-icon">
              <FcPhone/> </span
              >Phone
            </h3>
            <h6 className="contact-text">
            +880 821 720771<br/>
+880 821 717193<br/>
+8801754-313182
            </h6>
          </div>
        </article>
        <article className="contact-form">
          <form
            action=""
            method="POST"
            className="form-group"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="email"
              name="user_email"
              placeholder="email"
              className="form-control"
            />
            <textarea
              name="message"
              placeholder="post"
              className="form-control"
              rows="5"
            ></textarea>
         
                   
                     
                    
                 
            <button className="main-btn-xyz">Submit</button>
          </form>
        </article>
      </section>
    </section>
    );
};

export default Contract;