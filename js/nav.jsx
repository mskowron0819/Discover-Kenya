import React from 'react';
import {Link} from 'react-router';

class Navigation extends React.Component{
    render(){
        return <nav>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/wildLife'>Wild Life</Link></li>
                    <li><Link to='/culture'>Culture</Link></li>
                    <li><Link to='/beaches'>Beaches</Link></li>
                    <li><Link to='/safari'>Safari</Link></li>
                </ul>
                <div>{this.props.children}</div>
            </div>
        </nav>
    }
}
export default Navigation;