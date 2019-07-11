import React,{Component} from 'react';
import {db} from '../FirebaseConfig/firebaseInit';
const AboutContext = React.createContext();
export const AboutConsumer = AboutContext.Consumer;
export class AboutProvider extends Component{
    state={
        err: false,
        aboutLoading: true,
        aboutContent: '',
        skillsContent: ''
    };
    async getAboutRouteData(){
        try{
            let aboutDataReq = await this.getAboutData();
            let skillsDataReq = await this.getSkillsData();
        }catch(e){}
    }
    async getAboutData(entryId){
    }
    async getSkillsData(){
        return await db.collection('listItems').where('entryId', '==', db.collection('entries').doc(entryId)).get();
    }
}