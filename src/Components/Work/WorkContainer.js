import React from 'react';
import {WorkProvider} from './WorkContext';
import Work from './Work';
const WorkContainer = (props) =>(
    <WorkProvider>
        <Work />
    </WorkProvider>
);
export default WorkContainer