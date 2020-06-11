import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="BE Software Engineering" where="Sardar Vallabhbhai Patel Institute Of Technology , Vasad" from="2016" to="2020"/>
                <Widecard title="GHSEB" where="Gujarat Higher Secondary Education Board" from="2014" to="2016"/>
            </div>
        );
    }
}

export default Education; 