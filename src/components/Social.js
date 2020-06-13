import React, { Component } from 'react';

class Social extends Component{
    render(){
        return(
            <div className='social'>
                <a href='https://github.com/Dharmik57'rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                <a href='/' target="_blank"><i className="fab fa-instagram"></i></a>
                <a href='/' target="_blank"><i className="fab fa-facebook-f"></i></a>
                <a href='/' target="_blank"><i className="fab fa-twitter"></i></a>
                <a href='https://www.linkedin.com/in/dharmik-valani-5928b213b' rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                <a href='https://medium.com/@TutorialWithDharmik' rel="noopener noreferrer" target="_blank"><i className="fab fa-medium-m"></i></a>
            </div>
        );
    }
}

export default Social;