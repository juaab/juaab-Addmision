import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class nav extends Component {

    handleClick = e => {
        const login = localStorage.getItem('login')
        console.log("clicked", login)
        if (login !== null) {
            this.props.history.push('/admision-details')
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <Link className="navbar-brand" to="/"> JUAAB </Link>

                    <div className="collapse navbar-collapse " id="navbarNavDropdown">

                        <ul className="navbar-nav" >

                            <li className="nav-item">
                                <Link className="nav-link" to="/payments"> Payments </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" onClick={this.handleClick}> Admission Detailes </a>
                            </li>

                            <li className="nav-item dropdown">

                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Application </a>

                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                    <Link className="dropdown-item" to="/ikebana"> Ikebana Application </Link>
                                    <Link className="dropdown-item" to="/Language-Proficiency-Application"> Language Proficiency Application 
                                    </Link>

                                </div>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(nav)
