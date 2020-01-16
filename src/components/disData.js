import React, { Component } from 'react'
import { firebase } from '../firebase/db'


class DisData extends Component {
    state = {
        users: null
    }

    componentDidMount() {
        var arr = []
        const fireStore = firebase.firestore()
        fireStore.collection('addmissionforms')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    arr.push(doc.data())

                })
                this.setState({ users: arr })
            })
            .catch(err => console.log(err))
    }

    handleAccept = (cell) =>{
        const ref = firebase.firestore().collection('addmissionforms').doc(cell)
        ref.update({
            status:'Accepted'
        })
        .then(()=>{
            window.location.reload()
        })
        .catch(err=>console.error(err))
    }
    handleReject = (cell) =>{
        const ref = firebase.firestore().collection('addmissionforms').doc(cell)
        ref.update({
            status:'Rejected'
        })
        .then(()=>{
            window.location.reload()
        })
        .catch(err=>console.error(err))
    }
    render() {

        const renderData = this.state.users && this.state.users.map((u, i) => {
            return (
                <tr key={u.cell}>
                    <th scope="row">{i}</th>
                    <td>{u.course}</td>
                    <td>{u.name}</td>
                    <td>{u.b_day}</td>
                    <td>{u.nationality}</td>
                    <td >{u.status}</td>
                    <td>
                        <button style={{ background: 'green', border: '1px solid black', marginLeft: '5px', borderRadius: '5px' }} onClick={()=>this.handleAccept(u.cell)}>Accept</button>
                        <button style={{ background: 'red', border: '1px solid black', marginLeft: '5px', borderRadius: '5px' }} onClick={()=>this.handleReject(u.cell)}>Reject</button>
                    </td>
                </tr>
            )
        })
        return (
            <div style={{ marginTop: '20px' }}>
                <table className="table" >
                    <thead style={{ background: 'gray', color: 'white' }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Course</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date of Birth:</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default DisData
