import React from 'react'
import chicken from '../images/grilled_chicken.jpg'

export default function Main () {
    return (
        <>
       
        <div className='main'>
                
            <div className='text_container'>

                <div className='main_text'>

                 <p className='what'>what</p>
                 <h1 className='main_heading'>would you like to <strong>order</strong> today?</h1>
                 <p className='main_para'>
                     Our job is to filling your tummy with delicious food
                     with fast and free delivery.
                 </p>

                </div>

                <div className='btn'>
                  <button className='btn1'>free delivery</button>
                  <button className='btn2'>dine in</button>
                </div>

            </div>

            <div className='image_container'>
                <img src={chicken} alt=''/>
            </div>
              
        </div>
        </>
    )
}
