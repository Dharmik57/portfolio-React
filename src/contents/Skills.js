import React, { Component } from 'react';
// import Progressbar from '../components/Progressbar'
import ProgressBar from 'react-bootstrap/ProgressBar';


class Skills extends Component {
        constructor(props){
            super(props);
            this.state={
            'myskills':[{
                lang:'HTML',
                percent:80
            },
            {
                lang:'CSS',
                percent:80
            },
            {
                lang:'Angular',
                percent:75
            },
            {
                lang:'React',
                percent:75
            },
            {
                lang:'.Net',
                percent:75
            },
            {
                lang:'Python',
                percent:60
            }
            ]
            };
            
        }

        render() {
            
            return (
                <div className="condiv skills">
                    <h1 className="subtopic">My Skills</h1>
                    
                    <ul>
                   
                        {/* insted of for loop we are using map function */}
                        {this.state.myskills.map((val)=>{
                        return (
                            <span>
                                <li key={val.key}>{val.lang}</li>
                                <ProgressBar animated now={val.percent} />
                                {/* <ProgressBar animated now={45} /> */}
                            </span>   
                        );
                        })}
                    </ul>
                </div>
            )
        }
}

export default Skills