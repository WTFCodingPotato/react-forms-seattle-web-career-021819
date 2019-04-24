import React, {Component} from 'react'

export default class ControlledInput extends Component {

  state = {
    firstName: 'Joshua',
    lastName: 'Loran'
  }

  handleFirstNameChange = (event) => {
    this.setState({
    firstName: event.target.value
  })
  }

  handleLastNameChange = (event) => {
    this.setState({
    lastName: event.target.value
  })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <form>
        <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}
