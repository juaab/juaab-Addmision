import React, { Component } from 'react'
import {firebase} from '../firebase/db'

class Login extends Component {

    state={
        email:'',
        password:''
    }

    handleChange =(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = e =>{
        e.preventDefault()
        console.log(this.state)
        const firestore = firebase.firestore()
        const ref = firestore.collection('admin')
        ref.where("email",'==',this.state.email).where('password','==',this.state.password).get()
            .then(snap=>{
                if(snap.empty){
                    alert("User not found")
                }else{
                    localStorage.setItem("login",true)
                    this.props.history.push('/admision-details')
                }
            })
    }
    render() {
        return (
            <div className="login-form container">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Log in</h2>       
                    <div className="form-group">
                         <input type="email" name="email" className="form-control" placeholder="Email" required="required" onChange={this.handleChange}/>
                      </div>
                    <div className="form-group">
                         <input type="text" name="password" className="form-control" placeholder="Password" required="required" onChange={this.handleChange}/>
                    </div>
                     <div className="form-group">
                         <button type="submit" className="btn btn-primary btn-block">Log in</button>
                    </div>    
                 </form>
                 
            </div>
        )
    }
}
export default Login
