import React from 'react';
import {Link} from 'react-router';


class WildLife extends React.Component{
    render(){
        return <div><h1 className="wild">Wild Life UNDER CONSTRUCTION...</h1>
            <Link to='beaches'>Wild Life</Link>
            <Link to="safari">Walking Safari</Link>
        </div>
    }
}
export default WildLife;