import React,{Component} from 'react';
import {db, storage} from '../FirebaseConfig/firebaseInit';
const PublicContext = React.createContext();
export const PublicConsumer = PublicContext.Consumer;
export class PublicProvider extends Component{
    state={
        err: false,
        contentLoading: true,
        pageContent: ''
    };
    async getPageData(pageRoute){
        switch(pageRoute){
            case 'about':
                await this.getAboutRouteData();
                break;
            case 'projects':
                await this.getProjectsRouteData();
                break;
            case 'work':
                await this.getWorkRouteData();
                break;
            case 'education':
                await this.getEducationRouteData();
                break;
            default: await this.resetState();
        }
    }
    async resetState(){
        await this.setState({
            err: true,
            contentLoading: false,
            pageContent: ''
        })
    }
    async getAboutRouteData(){
        try{
            let listsData = [];
            let aboutData = [];
            let aboutReqData = await db.collection('entries').where('category', '==', 'about').orderBy('order', 'asc').get();
            await aboutReqData.docs.forEach(async (doc) => {
                aboutData.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            let skillsReqData = await db.collection('lists').where('category', '==', 'skills').get();
            await skillsReqData.docs.forEach(async (doc) =>{
                let currentList = {
                    id: doc.id,
                    ...doc.data(),
                    items: []
                }
                let listItemsReqData = await db.collection('listItems').where('listId', '==', doc.ref).get();
                await listItemsReqData.docs.forEach(async (liDoc)=>{
                    currentList.items.push({
                        id: liDoc.id,
                        ...liDoc.data()
                    })
                });
                listsData.push(currentList);
            });
            let pageContentData = {
                aboutData,
                skills: {
                    ...listsData
                }
            };
            this.setState({
                ...this.state,
                err: false,
                contentLoading: false,
                pageContent: pageContentData
            });
        }catch(e){
            console.error(e);
            this.setState({
                ...this.state,
                err: true,
                contentLoading: false
            });
        }
    }
    async getProjectsRouteData(){
        try{
            let projectEntries = [];
            let projectsList = [];
            let projectsReqData = await db.collection('entries').where('category', '==' , 'projects').orderBy('order', 'asc').get();
            await projectsReqData.docs.forEach(async (doc) => {
                projectEntries.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            let projectsListReqData = await db.collection('lists').where('category', '==', 'projects').limit(1).get();
        }catch(e){
            console.error(e);
        }
    }
    render(){
        return(
            <PublicProvider value={{...this.state}}>
                {this.props.children}
            </PublicProvider>
        );
    }
}