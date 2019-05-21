import React from 'react';
import { Link } from 'gatsby';

// Intro Part Component

const IntroComponent = (props) => {
    return (
    <div className='intro' style={{padding: `8rem 1rem`}}>
      <div className='introheading'>
        {props.heading}
      </div>
      <p>{props.desc}</p>
      <br/>
      {props.children}
    </div>);
}

export default IntroComponent;  