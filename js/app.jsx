import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Navigation from './nav.jsx';
import MainSection from './main.jsx';
import WildLife from './wildLife.jsx';
import Culture from './culture.jsx';
import Beaches from './beaches.jsx';
import Safari from './safari.jsx';
import NotFound from './notFound.jsx';
require("./style.scss");

document.addEventListener('DOMContentLoaded',()=>{
    class App extends React.Component{
        render(){
            return <Router history={hashHistory}>
                    <Route path='/' component={Navigation}>
                <IndexRoute component={MainSection} />
                        <Route path='/wildLife' component={WildLife} />
                        <Route path='/culture' component={Culture} />
                        <Route path='/beaches' component={Beaches} />
                        <Route path='/safari' component={Safari} />
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
        }
    }
        ReactDOM.render(
            <App/>,
            document.getElementById('app')
        );
});