import React, { Component } from 'react';
import {PublicProvider} from '../../Providers/PublicContext';
import About from './About';

export default class AboutContainer extends Component {
    render() {
        return (
            <PublicProvider>
                <About />
            </PublicProvider>
        )
    }
}
