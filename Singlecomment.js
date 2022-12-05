import React from 'react';
import p1 from '../src/image/andy';
import p2 from '../src/image/jim';
import p3 from '../src/image/pam';
const Singlecomment =(props) =>{
    // console.log('props')
    return(
        <div className='comment'>
        <a href="/" className="avatar">
            <img src={props.imagename} alt="profile picture" height ="200" width="100" ></img>
        </a>
        <div className='content'>
            <a href="/" className="author">{ props.name}</a> 
            <div className='metadata'>
                <span className='date'>{props.date}</span>
            </div>
            <div className='text'>
                its amxaing
            </div>
            </div>
        {/* Hello world */}
    </div>
    )
}

export default Singlecomment;