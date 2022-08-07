import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Order from './components/Order'
import yam from './images/am_porridge.jpg'
import egusi from './images/egusi.jpg'
import plan from './images/ofada.jpg'
import rice from './images/jellof_rice.jpg'





function App() {
  return (
      <>
        <Navbar />
        <Main />
        <Order 
           image= {yam}
           name="yam porridge"
           text="free fried fish / meat"
           price="1000"
        />
        <Order 
           image= {egusi}
           name="egusi soup"
           text="free soft drink / fish"
           price="2500"
        />

        <Order 
           image= {plan}
           name="ofada rice and sauce"
           text="free soft drink / meat"
           price="2000"
        /> 

        <Order 
           image= {rice}
           name="jellof rice"
           text="free soft drink / meat"
           price="1500"
        /> 
      </>
  );
}

export default App;
