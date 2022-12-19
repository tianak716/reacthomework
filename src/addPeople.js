import React, { Component } from "react"
class AddPerson extends Component {
    state ={
      name: null,
      age: null,
      favColor: null  
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" onChange={this.handleChange} />
              <label htmlFor="age">Age:</label>
              <input type="text" id="favColor" onChange={this.handleChange} />
              <label htmlFor="favColor">favColor:</label>
              <input type="text" id="name" onChange={this.handleChange} />
              <button>Submit</button>
            </form>
          </div>
        );
    }
}
export default AddPerson