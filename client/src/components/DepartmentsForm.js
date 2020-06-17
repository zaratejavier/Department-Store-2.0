import React from "react"
import {Form, Header} from "semantic-ui-react"
import axios from "axios";

class DepartmentsForm extends React.Component {
  defaultValues = {name: ""}
  state = {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault()
    const department = {...this.state,}
    axios.post("/api/departments", department)
      .then(res => {
        this.props.add(res.data)
      })
    this.setState({...this.defaultValues})
  }

  handleChange = (e) => {
    const {target: {name, value,},} = e;
    this.setState({[name]: value});
  }

  render() {
    const {name} = this.state

    return(
      <div>
        <Header as="h1">New Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Button color="blue"> Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default DepartmentsForm