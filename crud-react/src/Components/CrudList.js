import React, { Component } from 'react'
import CrudForm from './CrudForm'

export default class CrudList extends Component {

    state={
        currentIndex : -1,
        list: this.returnList()
    }

    returnList(){
        if(localStorage.getItem("userData") == null)
        localStorage.setItem("userData",JSON.stringify([]))
        return JSON.parse(localStorage.getItem("userData"))
    }

onAddOrEdit = (data)=>{
    var list = this.returnList()
    if(this.state.currentIndex === -1)
        list.push(data)
    else
        list[this.state.currentIndex]=data
    localStorage.setItem("userData",JSON.stringify(list))
    this.setState({list,currentIndex : -1})
}

handleEdit=index=>{
    this.setState({
        currentIndex:index
    })
}

handledelete=index=>{
    var list=this.returnList()
    list.splice(index,1)
    localStorage.setItem("userData",JSON.stringify(list))
    this.setState({list,currentIndex : -1})
}

    render() {
        return (
            <div>
                <CrudForm  
                    onAddOrEdit={this.onAddOrEdit}
                    currentIndex={this.state.currentIndex}
                    list = {this.state.list}
                />
                <hr />
                <p>form list</p>
                <table>
                <tbody>
                <tr>
                    <td>Fname</td>
                    <td>Lname</td>
                    <td>contact</td>
                    <td>Email</td>
                    <td>gender</td>
                    <td>Edit</td>
                    <td>Delete</td>
                    </tr>
                </tbody>
                    <tbody>
                        {
                            this.state.list.map((item,index)=>{
                                return <tr key={index}>
                                    <td>{item.Fname}</td>
                                    <td>{item.lName}</td>
                                    <td>{item.Contact}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td><button onClick = {()=>this.handleEdit(index)}>Edit</button></td>
                                    <td><button onClick = {()=>this.handledelete(index)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
