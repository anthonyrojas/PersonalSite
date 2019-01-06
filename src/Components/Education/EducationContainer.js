import React from 'react';
import {EducationProvider} from './EducationContext';
import Education from './Education';
const EducationContainer = (props)=>(
    <EducationProvider>
        <Education />
    </EducationProvider>
);
export default EducationContainer;