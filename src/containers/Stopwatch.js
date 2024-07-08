import React, { useState, useEffect } from 'react'
import "../App.css";

import testImg from '../assets/images/testImage.jpeg'
import fblogo from '../assets/images/fb_logo.png'

function Stopwatch() {
    useEffect(() => {
      
    
    //   return () => {
    //     second
    //   }
    }, [])
    
    const [timer, setTimer] = useState(0);
    const [speed, setSpeed] = useState(2000);

    return (

        <div className='container' >daassasd
            <div className='backgroungImg'>
                {/* <img className='coverImg' src={testImg}> cover img</img> */}
                <div className='logos'>
                                        <img className='fblogo' src={fblogo}></img>
                </div>
                <div className='profileImg' style={{ backgroundColor: 'white' }}>
                    small logo
                </div>

            </div>

        </div>
    )
}

export default Stopwatch