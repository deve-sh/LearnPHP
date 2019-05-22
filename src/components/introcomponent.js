import React from 'react';

// Intro Part Component

const IntroComponent = (props) => {
    return (
    <div className='intro' style={{padding: `8rem 1rem`}}>
      <div className='introheading'>
        {props.heading}
      </div>
      <p style={{fontFamily:`cambria`}}>{props.desc}</p>
      <br/>
      {props.children}
    </div>);
}

export default IntroComponent;  