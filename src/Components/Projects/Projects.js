import React,{Component} from 'react';
import './Projects.css';
import {db, storage} from '../../firebaseInit';
class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {
            statusCode: 404,
            content: ''
        }
    }
    componentWillMount(){
        db.collection('entries').where('title', '==', 'Projects').limit(1).get()
        .then((snapshot)=>{
            if(snapshot.length > 1){
                snapshot.forEach((doc)=>{
                    this.setState({
                        ...this.state,
                        statusCode: 200,
                        content: doc.data()
                    });
                });
            }else{
                this.setState({
                    ...this.state,
                    statusCode: 404,
                    content: ''
                });
            }
        })
        .catch(err=>{
        });
    }
    render(){
        return(
        <div className='Projects'>
            <div className='row'>
                <h2 className='section-header'>Projects</h2>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='paper'>
                        <p className='section-description'>
                        {
                            this.state.statusCode === 200 ? this.state.content.description : 'Nothing to show here.'
                        }
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Projects;