import React, {useState, useEffect} from 'react';
import axios from "axios"
import {Card, Button, Icon} from "semantic-ui-react"
// import {Link} from "react-router-dom"
import DepartmentsForm from "./DepartmentsForm"




const Departments = (props) => {
  const [departments, setDepartments] = useState([])
  // const [ShowDepartmentForm, setDepartmentForm] = useState(false)

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

  const addDepartment = (department) => {
    setDepartments([department], ...departments)
  }

  function deleteDepart(id){
    axios
    .delete(`/api/departments/${id}`)
    .then((res) => {
      const filterDepart = departments.filter((d) => d.id !==res.data.id)
      setDepartments(filterDepart)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const renderDepartments = () =>{
    if(departments.length <= 0) return <h2>No Departments..</h2>
    return departments.map ((department) => (
      <Card key={department.id}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
        </Card.Content>
        <Button
        icon
        color="red"
        size="tiny"
        onClick={() => deleteDepart(department.id)}
      >
        <Icon name="trash" />
      </Button>

      <Button
        icon
        color="blue"
        size="tiny"
        // onClick={() => updateMenu(id)}
      >
        <Icon name= "pencil alternate"/>
      </Button>
      </Card>
    ))
  }

  return (
    <div>
      <DepartmentsForm add={addDepartment}/>
      <h1>Departments</h1>
      <Card.Group>{renderDepartments()}</Card.Group>
    </div>
  )
}

export default Departments