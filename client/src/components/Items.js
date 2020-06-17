import React, { useState, useEffect } from "react"
import Axios from "axios"

function Items ({departmentId}) {
  const [items, setItems] = useState([])

  function renderItems() {
    return items.map((i) => (
      <div>
        <h3>{i.name}</h3>
        <p>{i.description}</p>
      </div>
    ))
  }

  async function getItems(){
    const res = await Axios.get(`/api/departments/${departmentId}/items`);
    console.log(res)
    setItems(res.data)
  }

  useEffect(() => {
    getItems();
  },[])
 
  return (
    <div>
      <h1>Items</h1>
      {renderItems()}
    </div>
  )
}

export default Items