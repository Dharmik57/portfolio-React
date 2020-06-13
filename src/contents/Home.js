import React, { Component } from 'react';
import ReactTypingEffect  from 'react-typing-effect';
import profilepic from '../img/dharmikimg.jpg' ;
import Social from '../components/Social';
import ProgressBar from 'react-bootstrap/ProgressBar'
class Home extends Component{
    render(){
        return(
            <div className='condiv  home'>
                <img src={profilepic} alt='profile' className='profilepic'></img>
                <ReactTypingEffect className='typingeffect' text={['I am Dharmik Valani ','I am a web developer']} speed={100} eraseDelay={700}/>
                <Social/>
            </div>
        );
    }
}

export default Home; 