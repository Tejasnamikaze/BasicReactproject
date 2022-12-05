import React from "react";
import ReactDOM from 'react-dom';
import p1 from '../src/image/andy'
import p2 from '../src/image/jim';
import p3 from '../src/image/pam';
import Singlecomment from './Singlecomment'
const App =() =>
{
    return(
        <div className='ui comments'>
           <Singlecomment 
           name='jack' 
           date="Today at 5:00pm"
           imagename={p1}
           />
            <Singlecomment 
            name='jack' 
            date="Today at 8:00pm"
            imagename={p2}/>
            <Singlecomment 
             name='sarah'
             date="Today at 7:00pm"
             imagename={p3}
             />


        
    </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)