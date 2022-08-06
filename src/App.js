import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Order from './components/Order'
import image1 from '../images/am_porridge.jpg'




function App() {
  return (
      <>
        <Navbar />
        <Main />
        <Order 
           image= 
           name="yam porridge"
           text="free fried fish / meat"
           price="1000"
        />

        <Order 
           image="./images/banga.jpg"
           name="banga soup"
           text="free soft drink & fish"
           price="500"
        />

        <Order 
           image="./images/jellof_rice.jpg"
           name="jeloof rice"
           text="free soft drink & meat"
           price="1500"
        /> 
      </>
  );
}

export default App;


