import React, { Component } from 'react'

export default class CrudForm extends Component {

state = {
    ...this.returnStateObject()
}
returnStateObject(){
    if(this.props.currentIndex === -1)
    return{
        Fname : "",
        lName : "",
        Contact : "",
        email: "",
        gender:""
    }
    else
    return this.props.list[this.props.currentIndex]
}


componentDidUpdate(prevProps){
    if(prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length)
    this.setState({...this.returnStateObject()})
}

handleInputChange =(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}

handlesubmit=(e)=>{
    e.preventDefault()
    this.props.onAddOrEdit(this.state)
}

    render() {
        return (
            <form onSubmit={this.handlesubmit} >
                First Name: <input name="Fname" placeholder="FirstName"  value={this.state.Fname} onChange={this.handleInputChange} required/><br />
                Last Name: <input name="lName" placeholder="LastName" value={this.state.lName} onChange={this.handleInputChange} required/><br />
                Contact: <input type="number" name="Contact" placeholder="contact" value={this.state.Contact} onChange={this.handleInputChange} required/><br />
                Email: <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} required/><br />
                Gender: <input type="radio" value="male" name="gender" onChange={this.handleInputChange} checked/>Male
                <input type="radio" value="female" name="gender" onChange={this.handleInputChange}/>female <br/>
                <input type="checkbox" required/>I agree terms and conditions <br /> 

                <button type="submit">submit</button>  
            </form>
        )
    }
}

