import React from 'react'
import ApplicationDevelopment from './applicationDev';
import Backend from './backend';
import Cloud from './cloud';
import Databases from './databases';
import DesignLibraries from './designLibraries';
import Frontend from './frontend';
import Fullstack from './fullstack';
import ProgrammingLanguages from './programmingLanguages';
import './skills.css';
export default function Skills(props) {
    return (
        <React.Fragment>
            <div className='row skills-section paper-dark'>
                <h2 style={{width: '100%', textAlign: 'center'}}>Skills</h2>
                <p>Below are some skills I have acquired through my time in school, working on my own projects, freelancing, or at my full-time job. My hopes are that these lists will continue to grow.</p>
            </div>
            <div className='row md-section'>
                <ApplicationDevelopment />
                <Backend />
                <Cloud />
                <Databases />
                <DesignLibraries />
                <Frontend />
                <Fullstack />
                <ProgrammingLanguages />
            </div>
        </React.Fragment>
    )
}
