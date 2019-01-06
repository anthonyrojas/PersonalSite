import React, {Component} from 'react';
import {AboutProvider} from './AboutContext';
import About from './About';
class AboutContainer extends Component{
    render(){
        return(
            <AboutProvider>
                <About />
            </AboutProvider>
        );
    };
}
// const AboutContainer = (props) => (
//     <AboutProvider>
//         <About />
//     </AboutProvider>
// );
export default AboutContainer;