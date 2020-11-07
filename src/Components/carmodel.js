import React, { Component, createContext, useState } from 'react';
import '../App.css';
import Head from './head';
import Cv from './cv';





function Carmodel(props) {

  const versiondata = ['LXI', 'VXI', 'VXI AMT', 'ZXI', 'ZXI AMT', 'ZXI Plus', 'ZXI Plus AMT'];
  const citydata = ['Mumbai', 'Pune', 'Navi Mumbai', 'Alwar', 'Goa', 'Chandigarh'];


  return (

    <div>

     
        <div className="container">

          <div className="row">

            <div>
              <img src={'images/maruti1.jpg'} alt="Img" className="img3" />
            </div>
            <h3 className="h3">Maruti Suzuki Swift</h3>


            <div>
              <Cv name={'Version'} popcontent={versiondata} default={versiondata[0]}></Cv>
              <Cv name={'City'} popcontent={citydata} default={citydata[0]}></Cv>
            </div>

            <div >

              <span className="price"> ₹ 5.96 Lakh</span>
              <span className="pricebreakup">View Price Breakup</span>

            </div>
            <span className="onroad">On-Road Price</span>

            <div className="emiDiv">
              <p className="Emi">EMI ₹ 9,740</p><button className="button">Customrize your Emi</button>
              <p className="years">For 5 years</p>
            </div>



          </div>
        </div>
      

    </div>
    
        );




}







export default Carmodel;
