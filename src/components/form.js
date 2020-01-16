import React, { Component } from 'react'
import { firebase } from '../firebase/db'


class Form extends Component {

    state = {
        course: 'Select',
        name: '',
        f_name: '',
        m_name: '',
        b_day: '',
        nationality: 'Select',
        occopation: '',
        address: '',
        tel: '',
        cell: '',
        email: '',
        p_address: '',
        ssc_p_year: '',
        ssc_institute: '',
        ssc_gpa: '',
        hsc_p_year: '',
        hsc_institute: '',
        hsc_gpa: '',
        languageProf: '',
        language_proficiency: '',
        study_japanese: '',

    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const firestore = firebase.firestore()
        const ref = firestore.collection('addmissionforms').doc(this.state.cell)
        ref.set({
            ...this.state,
            status: 'painding'

        }).then(snap => {
            alert('data inseart sucessfully')

        })
            .catch(err => console.log(err))

    }

    render() {


        return (
            <div>

                <h3 className="h3">Addmission form</h3>
                <div className="container">
                    <div className="form-item">
                        <form role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <p>Please choose the course of your choice:</p>
                                <select name="course" className="form-control" id="choiceval" onChange={this.handleChange}  >
                                    <option className="form-control"  > Select</option>
                                    <option className="form-control" required="required" >Short Course(3months, 3 days in a week in the evening)</option>
                                    <option className="form-control" required="required" >N-5,N-4 & N-3 Course( 3 days in a week in the evening)</option>
                                    <option className="form-control" required="required">JLPT preparation className</option>
                                </select>

                            </div>
                            <br />
                            <h4 className="h4 text-center">Personal Information:</h4>
                            <div className="form-group">
                                <label htmlFor="Name">Name:</label>
                                <input type="name" className="form-control" id="nameval" name="name" onChange={this.handleChange} required="required" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="Name">Father's Name:</label>
                                <input type="name" className="form-control" id="fnameval" name="f_name" onChange={this.handleChange} required="required" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="Name">Mother's Name:</label>
                                <input type="name" className="form-control" id="mnameval" name="m_name" onChange={this.handleChange} required="required" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="Name">Date of Birth:</label>
                                <input type="date" className="form-control" id="bdayval" name="b_day" onChange={this.handleChange} required="required" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="state_id" className="control-label">Nationality</label>
                                <select className="form-control" id="nationval" name="nationality" onChange={this.handleChange} required="required">
                                    <option value="Bangladeshi">Select</option>
                                    <option value="Bangladeshi">Bangladeshi</option>
                                    <option value="Japanis">japanese</option>
                                    <option value="Chinise">Chinies</option>
                                    <option value="Indian">Indian</option>
                                </select>

                            </div>
                            <div className="form-group">
                                <label htmlFor="Name">Occopation:</label>
                                <input type="name" className="form-control" id="occoval" name="occopation" onChange={this.handleChange} required="required" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Present Address:</label>
                                <input type="address" className="form-control" id="preval" name="address" onChange={this.handleChange} required="required" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Contact info:</label>
                                <br />
                                <label htmlFor="tel">Tel:</label>
                                <input type="text" name="tel" id="tnumbervarl" placeholder="Tel" onChange={this.handleChange} />
                                <label htmlFor="cell">Cell:</label>
                                <input type="text" name="cell" id="cnumberval" placeholder="Cell" onChange={this.handleChange} />
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="cemailval" placeholder="Email" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Permanent Address:</label>
                                <input type="address" className="form-control" id="peraddval" name="p_address" onChange={this.handleChange} />
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <h4 className="h4 text-center">Academic Qualification:</h4>
                                <div>
                                    <label htmlFor="address">SSC/Equavilant:</label><br />

                                    <input type="text" name="ssc_p_year" placeholder="Passing Year" onChange={this.handleChange} style={{ marginRight: '10px', borderRadius: '5px' }} />

                                    <input type="text" name="ssc_institute" placeholder="Institute" onChange={this.handleChange} style={{ marginRight: '10px', borderRadius: '5px' }} />

                                    <input type="text" name="ssc_gpa" placeholder="Division/GPA" onChange={this.handleChange} style={{ marginRight: '10px', borderRadius: '5px' }} />
                                </div>
                                <div>
                                    <label htmlFor="address">HSC/Equavilant:</label><br />
                                    <input type="text" name="hsc_p_year" placeholder="Passing Year" onChange={this.handleChange} style={{ marginRight: '10px', borderRadius: '5px' }} />

                                    <input type="text" name="hsc_institute" placeholder="Institute" onChange={this.handleChange} style={{ marginRight: '10px', borderRadius: '5px' }} />

                                    <input type="text" name="hsc_gpa" placeholder="Division/GPA" onChange={this.handleChange} style={{ marginRight: '10px', borderRadius: '5px' }} />
                                </div>

                                <div className="form-group"></div>
                                <label className="control-label" htmlFor="sel2">Proficiency in any other forgain Language :</label><br />
                                <select name="languageProf" id="tesNoVal" onChange={this.handleChange}>
                                    <option value="yes" >Select</option>
                                    <option value="yes" id="yes">Yes</option>
                                    <option value="no" id="no">No</option>
                                </select>
                                <p>if Yes, write name</p>
                                <input type="text" className="" id="ifyesval" name="language_proficiency" onChange={this.handleChange}></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Why do you want to study japanese?</label>
                                <textarea className="form-control" rows="5" id="comment" name="study_japanese" onChange={this.handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-success" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form



