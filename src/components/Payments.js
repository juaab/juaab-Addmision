import React, { Component } from 'react'

export default class Payments extends Component {
    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Course Title</th>
                            <th scope="col">Amounts</th>
                            <th scope="col">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>cost of teaching materials</td>
                            <td>6,000/-</td>
                            <td>Basic Fees</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Short Course</td>
                            <td>10,000/-</td>
                            <td>3 months</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Long Course</td>
                            <td>20,000/-</td>
                            <td>6 months</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

