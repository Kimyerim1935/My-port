import React from 'react';
import './Instagram.css';
import { Route, Link } from 'react-router-dom';
import About from './About';






function Instagram(){
  return (
    <div className="instaContainer">

       <Link to="/About" className="back">Back</Link>
        <Route path='/About' component={About} />
        <div className="Instacontents">

        </div>
        <div className="Instacontents">

        </div>
        <div className="Instacontents">

</div>
        
        </div>
  );
}



export default Instagram;