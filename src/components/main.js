import React, { Component } from 'react'
import Form from './form'
import { Link, withRouter } from 'react-router-dom'

class Main extends Component {

    handleClick = e =>{
        
        const login = localStorage.getItem('login')
        console.log("clicked",login)
        if(login !==null){
            this.props.history.push('/admision-details')
        }else{
            this.props.history.push('/login') 
        }
    }
    render() {
        return (
            <div>

                <div style={{ textAlign: 'center', marginBottom: '20px',color:'black',marginTop:'20px' }}>
                    <button style={{ borderRadius: '3px', border: '2px solid blue', marginBottom: '10px',padding:'10px',color:'black',background:'gray' }} onClick={this.handleClick}>Admission Detailes</button>
                </div>
                <Form />
            </div>
        )
    }
}

export default withRouter(Main);
