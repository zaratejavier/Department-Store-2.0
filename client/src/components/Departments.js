import React, {useState, useEffect} from 'react';
import axios from "axios"
import {Card, Button, Icon} from "semantic-ui-react"
import {Link} from "react-router-dom"  
import Department from "./Department"
import styled from "styled-components"
import DepartmentsForm from "./DepartmentsForm"
import Items from "./Items"


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
  },[]) //√

  // const addDepartment = (department) => {
  //   setDepartments([department, ...departments])
  // }

  // function deleteDepart(id){
  //   axios
  //   .delete(`/api/departments/${id}`)
  //   .then((res) => {
  //     const filterDepart = departments.filter((d) => d.id !==res.data.id)
  //     setDepartments(filterDepart)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // } //√

  const renderDepartments = () =>{
    if(departments.length <= 0) return <h2>No Departments..</h2>
    return departments.map ((department) => (
      <Card>
        <Card.Content style={cardStyle}>
          <Link to={`/departments/${department.id}`} key={department.id}>
            {department.name}
          </Link>
        </Card.Content>
      </Card>
    ))
  }

  return (
    <div>
      {/* <DepartmentsForm add={addDepartment}/> */}
      <h1 style={{
          textAlign:"center"
          }}>Departments</h1>
      <Card.Group>{renderDepartments()}</Card.Group>
    </div>
  )
}

const cardStyle = {
  padding: "60px",
  fontSize: "20px",
  textAlign: "center",
  backgroundColor: "#e0dede",
  display: "flex",
  justifyContent: "center"
}

export default Departments