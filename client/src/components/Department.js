import React,{useState, useEffect} from "react"
import Axios from "axios"
import ItemForm from "./ItemForm"
import { Card, Button, Item } from "semantic-ui-react"


function Department(props) {
  const [department, setDepartment] = useState({}) //Department is an object so we will default it as an object
  const [items, setItems] = useState([])

  useEffect(() =>{
    //axios call to department showp
    Axios.get(`/api/departments/${props.match.params.id}`) //props.match.params.id gets the id
    .then((res) => {
      setDepartment(res.data) //we get the data and send it to state
      Axios.get(`/api/departments/${res.data.id}/items`)
      .then((res) => {
        setItems(res.data) //we get the data and send it to state
      })
    }).catch((err) => {
      console.log(err)
    })
  },[])

   async function deleteItem(id){
    console.log(id)
    const res =  Axios.delete(`/api/departments/${department.id}/items/${id}`) //deparment.id we get from the state and id we get from the id passed in
    const filteredItems = items.filter((i) => i.id != res.data.id) //if the state id does not equal the database id
    setItems(filteredItems) //updates the state witout the deleted item
  }

  function handleAdd(itemObj){
    setItems([itemObj, ...items])
  }

  function handleEdit(){

  }

  function renderItems(){
    return items.map((i)  => (
      <Card>
        <Card.Content>
          <h1>{i.name}</h1>
          <Card.Meta>
          <p>{i.description}</p>
          </Card.Meta>
          <p>Price: ${i.price}</p>
        </Card.Content>
        <Button onClick={() => deleteItem(i.id)}>Delete</Button>
        <ItemForm deId={department.id} edit={handleEdit} {...i}/>
      </Card>
    ))
  }

  return(
    <div>
      <h1>{department.name}</h1>
      <ItemForm deId={department.id} add={handleAdd} />
      {/* {props.match.params.id}  */}
      <div onClick={props.history.goBack}>Back</div>
      {renderItems()}
    </div>
  )
}

export default Department
