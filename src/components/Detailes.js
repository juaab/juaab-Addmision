import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DisData from './disData'

class Detailes extends Component {
    render() {
        return (
            <div >
                <div style={{textAlign:'center',marginBottom:'20px',marginTop:'20px'}}>
                    <Link to="/" style={{ borderRadius: '3px', border: '2px solid blue', marginBottom: '10px',padding:'10px',color:'black',background:'gray' }}>Admission Form</Link>
                </div>
                <DisData />
            </div>
        )
    }
}

export default Detailes