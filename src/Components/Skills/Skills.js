import React, {Component} from 'react';
import {db} from '../../firebaseInit';
import './Skills.css';
class Skills extends Component{
    constructor(props){
        super(props);
        db.collection('listItems').where('entryID', '==', props.entryID)
    }
    render(){
        return(
            <div className='row Skills'>
            </div>
        );
    }
}
export default Skills;