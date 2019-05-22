// Linker Components for the bottom of tutorial pages to direct users between pages.
// Conditional Rendering in case there is an absense of a prop.

import React from "react";
import {Link} from "gatsby";

const Linker = (props) => {
    if(props.previous && props.next){
        return (
            <div className='linker'>
                <Link to = {props.previous}><button className='btn previous'>{props.previousLabel}</button></Link>
                <Link to = '/'><button className='btn home'>Home</button></Link>
                <Link to = {props.next}><button className='btn next'>{props.nextLabel}</button></Link>
                <br/><br/>
            </div>
        );
    }else if(!props.previous && !props.next){
        return ("Pass enough props!");
    }else if(!props.next){
        return (
        <div className='linker'>
            <Link to = {props.previous}><button className='btn previous'>{props.previousLabel}</button></Link>
            <Link to = '/'><button className='btn home'>Home</button></Link>
            <br/><br/>
        </div>);
    }else{
        return (
            <div className='linker'>
                <Link to = '/'><button className='btn home'>Home</button></Link>
                <Link to = {props.next}><button className='btn next'>{props.nextLabel}</button></Link>
                <br/><br/>
            </div>
        );
    }
}

export default Linker;