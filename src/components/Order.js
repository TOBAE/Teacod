import React from 'react'


export default function Order(props){
     return (

    <div className='card_container'>
        <div className='card'>
           <div className='card_image'>
               <img src= {`../images/${props.image}`} alt=''/>
            </div>    

            <div className='card_text'>
                <h1> {props.name} </h1>  
                <p> {props.text} </p>  
            </div>   

            <hr />

            <div className='card_footer'>
                <div className='card_price'>
                    <div className='price_items'>
                        <button className='empty_price'><i class="fas fa-circle"></i></button>
                    </div>

                    <div className='price_items'>
                        <p className='price'>$ <span>{props.price}</span></p>
                    </div>
                
                </div>

                <div className='card_add'>
                    <h2>+ Add</h2>
                </div>
            </div>
        </div>   
    
    </div>
    
     )
}
