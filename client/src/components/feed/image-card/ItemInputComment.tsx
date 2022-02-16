import React from "react"; 
import { Form, Input } from "semantic-ui-react"; 

const ItemInputComment = () =>(
    <Form>
      <Form.Field>
        <Input action='Post' placeholder='Add a comment ...' />
      </Form.Field>
    </Form>
);

export default ItemInputComment;