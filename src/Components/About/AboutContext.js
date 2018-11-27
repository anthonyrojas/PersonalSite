import React, {Component} from 'react';
import {db} from '../../firebaseInit';
const AboutContext = React.createContext();
export class AboutProvider extends Component{
    state={
        statusCode: 0,
        aboutLoading: true,
        aboutContent: '',
        skillsContent: ''
    }
    async getAboutData(){
        return await db.collection('entries').where('title', '==', 'About').limit(1).get();
    }
    async getSkillLists(entryID){
        return await db.collection('list_items').where('entryID', '==', entryID).get();
    }
    async getSkillsListItems(listID){
        return
    }
    fetchAboutData = () =>{
        db.collection('entries').where('title', '==', 'About').limit(1).get()
        .then((snapshot)=>{
            if(snapshot.docs.length >= 1){
                snapshot.forEach((doc)=>{
                    this.setState({
                        ...this.state,
                        statusCode: 200,
                        aboutContent: doc.data(),
                        aboutLoading: false
                    });
                });
            }else{
                this.setState({
                    ...this.state,
                    statusCode: 404,
                    aboutContent: '',
                    aboutLoading: false
                });
            }
        })
        .catch(err=>{
            this.setState({
                ...this.state,
                statusCode: 500,
                aboutContent: '',
                aboutLoading: false
            })
        });
    }
    async componentDidMount(){
        try{
            let aboutRes = await this.getAboutData();
            aboutRes.forEach(doc => {
                this.setState({
                    ...state
                })
            });
        }catch(e){

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