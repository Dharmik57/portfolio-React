// “Navitem” is the sub-component and “Navbar” is the parent component
import React from 'react';
import NavItem from './NavItem';
// “Navitem” is the sub-component.

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            'NavItemActive':''
        }
    }

    activeitem=(x)=>{
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };

    render(){
        return(
            <nav>
                <ul>
                    <NavItem item="Home" tolink="/" activec={this.activeitem}></NavItem>
                    <NavItem item="About" tolink="/about" activec={this.activeitem}></NavItem>
                    <NavItem item="Education" tolink="/education" activec={this.activeitem}></NavItem>
                    <NavItem item="Skills" tolink="/skills" activec={this.activeitem}></NavItem>
                    <NavItem item="Contact" tolink="/contact" activec={this.activeitem}></NavItem>
                </ul>
            </nav>
        );
    }
}

export default Navbar;