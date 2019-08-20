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
export default function Skills() {
    return (
        <div className='row'>
            <h2 style={{width: '100%', textAlign: 'center'}}>Skills</h2>
            <ApplicationDevelopment />
            <Backend />
            <Cloud />
            <Databases />
            <DesignLibraries />
            <Frontend />
            <Fullstack />
            <ProgrammingLanguages />
        </div>
    )
}
