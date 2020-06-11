import React, { Component } from 'react'
class Skills extends Component {
        constructor(props){
            super(props);
            this.state={
            'myskills':['HTML','CSS','JS','ANGULAR Js','REACT JS','ANDROID','PYTHON','.NET']
            };
        }
        render() {
            return (
                <div className="condiv skills">
                    <h1 className="subtopic">My Skills</h1>
                    <ul>
                        {/* insted of for loop we are using map function */}
                        {this.state.myskills.map((value)=>{
                        return <li>{value}</li>
                        })}
                    </ul>
                </div>
            )
        }
}
export default Skills