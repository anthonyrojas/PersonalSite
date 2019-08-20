import React, { Component } from 'react';
export default class skillsList extends Component {
    state = {
        activeItem: 0,
        dataLength: this.props.data.length
    }
    onClickScrollLeft = (e) =>{
        if(this.state.activeItem <= 0){
            this.setState({
                ...this.state,
                activeItem: this.state.dataLength - 1
            });
        }else{
            this.setState({
                ...this.state,
                activeItem: this.state.activeItem - 1
            });
        }
    }
    onClickScrollRight = (e) =>{
        if(this.state.activeItem >= (this.state.dataLength - 1)){
            this.setState({
                ...this.state,
                activeItem: 0
            });
        }else{
            this.setState({
                ...this.state,
                activeItem: this.state.activeItem + 1
            });
        }
    }
    render() {
        const data = this.props.data;
        return (
            <div className='skills-list-container'>
                <h3 className='skills-list-title'>{this.props.title}</h3>
                <div className='skill-list-carousel'>
                {
                    data.map((skill, index)=>(
                        <div key={skill.id} className={`skill-container ${index === this.state.activeItem ? 'skill-active' : null}`}>
                            <img className='skill-img' src={skill.imageUrl.publicURL} alt={skill.name} />
                            <h4 className='skill-title'>{skill.name}</h4>
                        </div>
                    ))
                }
                </div>
                <div className='skills-list-container-footer'>
                    <div className='skills-carousel-controls'>
                        <button onClick={this.onClickScrollLeft.bind(this)} className='skill-carousel-control-left'>
                            <i className='material-icons'>chevron_left</i>
                        </button>
                        <button onClick={this.onClickScrollRight.bind(this)} className='skill-carousel-control-right'>
                            <i className='material-icons'>chevron_right</i>
                        </button>
                    </div>
                    <div className='skills-list-indicators'>
                        {
                            data.map((skill, index)=>(
                                <div key={skill.id} className={`carousel-circle ${this.state.activeItem === index ? 'carousel-circle-active' : null}`}></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
