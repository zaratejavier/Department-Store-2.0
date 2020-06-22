import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import Axios from "axios";

export default function ItemForm(props) {
  const [name, setName] = useState(props.name ? props.name : "");
  const [price, setPrice] = useState(props.price ? props.price : "");

  async function handleSubmit() {
    if (props.id) {
      console.log("we should edit");
      const res = await Axios.put(
        `/api/departments/${props.did}/items/${props.id}`,
        {
          name: name,
          price: price,
        }
      );
      props.edit(res.data);
    } else {
      const res = await Axios.post(`/api/departments/${props.did}/items`, {
        name: name,
        price: price,
      });
      props.add(res.data);
    }
    setPrice("");
    setName("");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group width={"equal"}>
        <Form.Input
          label="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Input
          label="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Form.Button>add</Form.Button>
      </Form.Group>
    </Form>
  );
}
