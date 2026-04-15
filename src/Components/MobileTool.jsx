import React, { Component } from 'react';
import './mobileTools.css'
import mobiletool from '../Assets/IMG/mobiletools.svg'

const MobileTool = () => {
    return ( 
        <>
        <div className='mobileTools_div'>
        <img src={mobiletool} alt='' className='mobileTools' />
        </div>
        </>
     );
}
 
export default MobileTool;