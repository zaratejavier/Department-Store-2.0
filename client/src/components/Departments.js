import React, {useState, useEffect} from 'react';
import axios from "axios"
import {Card, Button} from "semantic-ui-react"
import {Link} from "react-router-dom"

// import DeparmentsFrom from "/.DepartmentsForm"


const Departments = (props) => {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    axios
      .get("/api/departments")
      .then((res) => {
        console.log(res);
        setDepartments(res.data);
      })
      .catch((e) => {
        console.log(e)
      })
  },[])

  const renderDepartments = () =>{
    if(departments.length <= 0) return <h2>No Departments..</h2>
    return departments.map ((department) => (
      <Card key={department.id}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
        </Card.Content>
      </Card>
    ))
  }

  return (
    <div>
      <h1>Departments</h1>
      <Card.Group>{renderDepartments()}</Card.Group>
    </div>
  )
}

export default Departments