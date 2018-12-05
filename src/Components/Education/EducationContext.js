import React,{Component} from 'react';
import {db} from '../../firebaseInit';
const EducationContext = React.createContext();
export const EducationConsumer = EducationContext.Consumer;
export class EducationProvider extends Component{
    state={
        loading: true,
        err: false,
        educationContent: ''
    }
    async componentDidMount(){}
    render(){
        return(
            <EducationContext.Provider value={{...this.state}}>
                {this.props.children}
            </EducationContext.Provider>
        );
    }
}