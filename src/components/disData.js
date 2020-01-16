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

    render() {

        const renderData = this.state.users && this.state.users.map((u, i) => {
            return (
                <tr key={u.id}>
                    <th scope="row">{i}</th>
                    <td>{u.course}</td>
                    <td>{u.name}</td>
                    <td>{u.b_day}</td>
                    <td>{u.nationality}</td>
                </tr>

            )
        })

        return (
            <div style={{ marginTop: '20px' }}>
                <table className="table" >
                    <thead style={{ background: 'gray', color: 'white' }}>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Course</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date of Birth:</th>
                            <th scope="col">Nationality</th>

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
