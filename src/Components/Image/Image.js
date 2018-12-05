import React, {Component} from 'react';
import '../About/About.css';
class Image extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            loaderHeight: 0
        }
    }
    imageLoaded(){
        this.setState({
            ...this.state,
            loading: false
        });
    }
    componentDidMount(){
        let currentHeight = this.state.loaderHeight;
        let currentWidth = this.loader.offsetWidth;
        if(currentHeight !== currentWidth){
            this.setState({
                ...this.state,
                loaderHeight: currentWidth
            });
        }
    }
    componentDidUpdate(){
        let currentHeight = this.state.loaderHeight;
        let currentWidth = this.loader.offsetWidth;
        if(currentHeight !== currentWidth){
            this.setState({
                ...this.state,
                loaderHeight: currentWidth
            });
        }
    }
    render(){
        return(
            <React.Fragment>
                <img src={this.props.imageSource} onLoad={this.imageLoaded.bind(this)} alt={this.props.altText} className={this.props.imgClass} style={this.state.loading ? {display: 'none'} : null} />
                <div ref={loader=>{this.loader=loader;}} className={this.props.loader} style={this.state.loading ? {height: this.state.loaderHeight} : {display: 'none'}}></div>
            </React.Fragment>
        );
    }
}
export default Image;