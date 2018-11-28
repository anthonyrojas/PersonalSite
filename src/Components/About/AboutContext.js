import React, {Component} from 'react';
import {db} from '../../firebaseInit';
const AboutContext = React.createContext();
export class AboutProvider extends Component{
    state={
        err: false,
        loading: true,
        aboutContent: '',
        skillsContent: ''
    }
    async getAboutData(){
        try{
            let snapshot = await db.collection('entries').where('title', '==', 'About').limit(1).get();
            if(snapshot.docs.length > 0){
                return {err: false, data: {...snapshot.docs[0].data(), id: snapshot.docs[0].id}};
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
                snapshot.docs.forEach(doc => {
                    let docData = {id: doc.id, ...doc.data()};
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
                snapshot.docs.forEach(doc => {
                    let docData = {id: doc.id, ...doc.data()};
                    docsData.push(docData);
                });
                return {err: false, data: docsData};
            }
            return {err: false, data: []};
        }catch(e){
            return {err: true, data: []};
        }
    }
    async componentDidMount(){
        let aboutData = await this.getAboutData();
        if(!aboutData.err){
            let listsData = await this.getSkillLists(aboutData.data.id);
            await listsData.data.forEach(async (list) => {
               let subListData = await this.getSkillsListItems(list.id);
               list.skills = subListData.data;
            });
            this.setState({
                ...this.setState,
                err: false,
                loading: false,
                aboutContent: aboutData.data,
                skillsContent: listsData.data
            });
        }else{
            this.setState({
                ...this.state,
                err: true,
                loading: false
            });
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