import React, {Component} from 'react';
import {db} from '../../firebaseInit';
const AboutContext = React.createContext();
export class AboutProvider extends Component{
    state={
        err: false,
        aboutLoading: true,
        skillsLoading: true,
        aboutContent: '',
        skillsContent: ''
    }
    async getAboutData(){
        try{
            let snapshot = await db.collection('entries').where('title', '==', 'About').limit(1).get();
            if(snapshot.docs.length > 0){
                return {err: false, data: {...await snapshot.docs[0].data(), id: snapshot.docs[0].id}};
            }
            return {err: true, data: {}};
        }catch(e){
            return {err: true, data: {}};
        }
        // return await db.collection('entries').where('title', '==', 'About').limit(1).get();
    }
    async getSkillLists(entryID){
        try{
            let snapshot = await db.collection('listItems').where('entryID', '==', db.collection('entries').doc(entryID)).get();
            if(snapshot.docs.length > 0){
                let docsData = [];
                await snapshot.docs.forEach(async (doc) => {
                    let docData = {id: doc.id, ...await doc.data()};
                    docsData.push(docData);
                });
                return {err: false, data: docsData};
            }
            return {err: true, data: []};
        }catch(e){
            return {err: true, data: []};
        }
        // return await db.collection('listItems').where('entryID', '==', entryID).get();
    }
    async getSkillsListItems(listID){
        try{
            let snapshot = await db.collection('subListItems').where('listItemID', '==', db.collection('listItems').doc(listID)).get();
            if(snapshot.docs.length > 0){
                let docsData = [];
                snapshot.docs.forEach(async (doc) => {
                    let docData = {id: doc.id, ...await doc.data()};
                    let itemData = await doc.data();
                    docsData.push(docData);
                });
                return {err: false, data: docsData};
            }
            return {err: false, data: []};
        }catch(e){
            return {err: true, data: []};
        }
    }
    async setHalfSuccessState(aboutContent, skillsContent){
        await this.setState({
            ...this.setState,
            err: false,
            aboutLoading: false,
            skillsLoading: true,
            aboutContent,
            skillsContent
        });
    }
    async setSuccessState(aboutContent, skillsContent){
        await this.setState({
            ...this.setState,
            err: false,
            aboutLoading: false,
            skillsLoading: false,
            aboutContent,
            skillsContent
        });
    }
    async setErrorState(){
        await this.setState({
            ...this.state,
            err: true,
            aboutLoading: false,
            skillsLoading: false
        });
    }
    async componentDidMount(){
        try{
            let aboutData = await this.getAboutData();
            if(!aboutData.err){
                let skillsData = await this.getSkillLists(aboutData.data.id);
                await skillsData.data.forEach(async (list) => {
                    list.skillsList = [];
                    const subListData = await this.getSkillsListItems(list.id);
                    list.skillsList = subListData.data;
                });
                await this.setSuccessState(aboutData.data, skillsData.data);
                return;
            }else{
                await this.setErrorState();
                return;
            }
        }catch(e){
            await this.setErrorState();
            console.log(e);
        }
    }
    render(){
        return(
            <AboutContext.Provider value={{...this.state}}>
                {this.props.children}
            </AboutContext.Provider>
        );
    }
}
export const AboutConsumer = AboutContext.Consumer;