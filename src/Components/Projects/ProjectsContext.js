import React, {Component} from 'react';
import {db} from '../../firebaseInit';
const ProjectsContext = React.createContext();
export const ProjectsConsumer = ProjectsContext.Consumer;
export class ProjectsProvider extends Component{
    state={
        loading: true,
        err: false,
        projectsContent: ''
    }
    async fetchProjectsContent(){
        try{
            let snapshot = await db.collection('entries').where('title', '==', 'Projects').limit(1).get();
            if(snapshot.docs.length > 0){
                return {
                    err: false,
                    data: {
                        ...snapshot.docs[0].data(),
                        id: snapshot.docs[0].id
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
    async fetchProjects(projectsID){
        try{
            let docsData = [];
            let snapshot = await db.collection('listItems').where('entryID', '==', db.collection('entries').doc(projectsID)).get();
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
                err: true,
                data: []
            }
        }catch(e){
            return{
                err: true,
                data: []
            }
        }
    }
    async setErrorState(){
        await this.setState({
            ...this.state,
            err: true,
            loading: false,
            projectsContent: ''
        });
    }
    async setSuccessState(projectsContent, projects){
        await this.setState({
            ...this.state,
            err: false,
            loading: false,
            projectsContent: {
                ...projectsContent,
                projects: projects
            }
        });
    }
    async componentDidMount(){
        try{
            let projectsContentData = await this.fetchProjectsContent();
            if(!projectsContentData.err){
                let projectsData = await this.fetchProjects(projectsContentData.data.id);
                await this.setSuccessState(projectsContentData.data, projectsData.data);
            }else{
                await this.setErrorState();
            }
        }catch(e){
            console.error(e);
            await this.setErrorState();
        }
    }
    render(){
        return(
            <ProjectsContext.Provider value={this.state}>
                {this.props.children}
            </ProjectsContext.Provider>
        );
    }
}