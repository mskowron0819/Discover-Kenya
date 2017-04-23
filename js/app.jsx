import React from 'react';
import ReactDOM from 'react-dom';
import MainSection from './mainSection.jsx';
require("./style.scss");


document.addEventListener('DOMContentLoaded',()=>{
    class App extends React.Component{
        render(){
            return <div>
                <MainSection/>
           </div>
        }
    }
        ReactDOM.render(
            <App/>,
            document.getElementById('app')
        );
});