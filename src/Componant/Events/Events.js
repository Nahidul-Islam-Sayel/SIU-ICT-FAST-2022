import React from 'react';
import './Events.css'
import xyz from '../img/Quiz.png'
import Typical from 'react-typical';
import Data from '../Data/Data'
import Programming from '../img/Programming.png';
import Quiz from '../img/Quiz.png';
import PROJECT from '../img/Project Showcaseing Soft.png';
import Hackathon from '../img/Hacathon.png'
const Events = () => {
    return (
        <div>

            <section className="services">
                <h1 className="services-title text-center Header">
                        EVENTS
                </h1>

                <div className="section-center clearfix">
              {  Data.map(data=>
                    <article className="service-card">


                        <div className="service-info d-flex justify-content-center d-flex align-items-center">

                            <h6 className="service-info-title Header ">

                                    {data.name}
                            </h6>
                          



                        </div>
                        
                        <div className="service-img-container">
                          
                            <img src={data.img} className="service-img" alt="" />
                    
                         
                        </div>
                        <br/>
                        <Typical className="Typical Header"
        steps={['REGISTRATION NOW', 1000, 'REGISTRATION NOW', 1000,'REGISTRATION NOW', 1000, 'REGISTRATION NOW', 1000]}
        loop={Infinity}
        wrapper="p"
      />
         <button className='button1'>Rules</button>
                
                    </article>

                )

}
                </div>
            </section>
            <div className="service-info-xyz d-flex justify-content-between align-items-center">

<h6 className="service-info-title  fluid1">

       8 <br/>EVENTS
</h6>
<h6 className="service-info-title fluid1">

200
+<br/>
EXPECTED TEAMS
</h6>
<h6 className="service-info-title fluid1">


700
+<br/>
EXPECTED PARTICIPANTS
</h6>




</div>
        </div>
    );
};

export default Events;