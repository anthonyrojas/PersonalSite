import React, {Component} from 'react';
import {db} from '../../firebaseInit';
const WorkContext = React.createContext();
export const WorkConsumer = WorkContext.Consumer;
export class WorkProvider extends Component{
    state = {
        err: false,
        loading: true,
        workContent: ''
    }
    async fetchWorkContent(){
        try{
            let snapshot = await db.collection('entries').where('title', '==', 'Work').limit(1).get();
            if(snapshot.docs.length > 0){
                return {
                    err: false,
                    data: {
                        id: snapshot.docs[0].id,
                        ...snapshot.docs[0].data()
                    }
                }
            }
            return {
                err: true,
                data: {}
            }
        }catch(e){
            console.error(e);
            return{
                err: true,
                data: {}
            }
        }
    }
    async fetchJobs(workID){
        try{
            let docsData = [];
            let snapshot = await db.collection('listItems').where('entryID', '==', db.collection('entries').doc(workID)).get();
            if(snapshot.docs.length > 0){
                await snapshot.docs.forEach(async (doc)=>{
                    let docData = {
                        id: doc.id,
                        ...doc.data()
                    }
                    docsData.push(docData);
                });
                return {
                    err: false,
                    data: docsData
                }
            }
            return{
                err: false,
                data: docsData
            }
        }catch(e){
            console.error(e);
            return {
                err: false,
                data: []
            }
        }
    }
    async fetchDuties(jobID){
        try{
            let docsData = [];
            let snapshot = await db.collection('subListItems').where('listItemID', '==', db.collection('listItems').doc(jobID)).get();
            if(snapshot.docs.length > 0){
                await snapshot.docs.forEach(async (doc)=>{
                    let docData = {
                        id: doc.id,
                        ...doc.data()
                    }
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
                err: false,
                data: []
            }
        }
    }
    async setSuccessState(workContentData, jobsData){
        await this.setState({
            ...this.state,
            loading: false,
            err: false,
            workContent: {
                ...workContentData,
                jobs: jobsData
            }
        });
    }
    async setErrorState(){
        await this.setState({
            ...this.state,
            err: true,
            loading: false,
            workContent: ''
        });
    }
    async componentDidMount(){
        try{
            let workContentData = await this.fetchWorkContent();
            if(!workContentData.err){
                let jobsData = await this.fetchJobs(workContentData.data.id);
                for(let job of jobsData.data){
                    job.duties = [];
                    const dutiesData = await this.fetchDuties(job.id);
                    job.duties = dutiesData.data;
                }
                await this.setSuccessState(workContentData.data, jobsData.data);
            }
        }catch(e){
            console.error(e);
            await this.setErrorState();
        }
    }
    render(){
        return(
            <WorkContext.Provider value={{...this.state}}>
                {this.props.children}
            </WorkContext.Provider>
        );
    }
}