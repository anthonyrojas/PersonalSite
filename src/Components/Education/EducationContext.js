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
    async fetchEducationContent(){
        try{
            let snapshot = await db.collection('entries').where('title', '==', 'Education').limit(1).get();
            if(snapshot.docs.length > 0){
                return {err: false,data: {...snapshot.docs[0].data(), id: snapshot.docs[0].id}};
            }
            return {err: true, data: {}};
        }catch(e){
            console.error(e);
            return {err: true, data: {}};
        }
    }
    async fetchSchools(educationID){
        try{
            let docsData=[];
            let snapshot = await db.collection('listItems').where('entryID', '==', await db.collection('entries').doc(educationID)).get();
            if(snapshot.docs.length > 0){
                await snapshot.docs.forEach(async(doc)=>{
                    let docData = {id: doc.id, ...doc.data()};
                    docsData.push(docData);
                });
                return {err: false, data: docsData};
            }
            return {err: true, data: docsData};
        }catch(e){
            console.error(e);
            return{
                err: true,
                data: []
            };
        }
    }
    async fetchCourses(schoolID){
        try{
            let docsData = [];
            let snapshot = await db.collection('subListItems').where('listItemID', '==', db.collection('listItems').doc(schoolID)).orderBy('title', 'asc').get();
            if(snapshot.docs.length > 0){
                await snapshot.docs.forEach(async (doc)=>{
                    let docData = {id: doc.id, ...doc.data()};
                    docsData.push(docData);
                });
                return {
                    err: false,
                    data: docsData
                }
            }
            return {
                err: false,
                data: docsData
            }
        }catch(e){
            console.error(e);
            return {
                err: true,
                data:[]
            }
        }
    }
    async setSuccessState(educationData, schoolsData){
        await this.setState({
            ...this.state,
            loading: false,
            educationContent: {
                ...educationData,
                schools: schoolsData
            },
            err: false
        });
    }
    async setErrorState(){
        await this.setState({
            ...this.state,
            err: true,
            loading: false,
            educationContent: ''
        });
    }
    async componentDidMount(){
        try{
            let educationData = await this.fetchEducationContent();
            if(!educationData.err){
                let schoolsData = await this.fetchSchools(educationData.data.id);
                for(let school of schoolsData.data){
                    school.courses = [];
                    const coursesData = await this.fetchCourses(school.id);
                    school.courses = coursesData.data;
                }
                await this.setSuccessState(educationData.data, schoolsData.data);
            }
        }catch(e){
            console.error(e);
            await this.setErrorState();
        }
    }
    render(){
        return(
            <EducationContext.Provider value={{...this.state}}>
                {this.props.children}
            </EducationContext.Provider>
        );
    }
}