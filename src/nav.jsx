import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component{
    render(){
        return <div className="footer">footer</div>
    }
}
class Navigation extends React.Component{
    render(){
        return <div><nav>
            <div className="logo"><Link to='/'><img src='../img/kenya-_flag_clipped_rev_1.png' alt='logo'/></Link></div>
            <div className="nav-bar">
                <ul>
                    <li><Link to='wildLife'>Wild Life</Link></li>
                    <li><Link to='culture'>Culture</Link></li>
                    <li><Link to='beaches'>Beaches</Link></li>
                    <li><Link to='safari'>Safari</Link></li>
                </ul>
            </div>
        </nav>
            {this.props.children}
        <Footer/>
        </div>
    }
}
export default Navigation;