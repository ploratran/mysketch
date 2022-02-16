import React from "react"; 
import { Form, Input, Feed, Segment, Divider } from "semantic-ui-react"; 
import ItemUser from "./ItemUser";
import ItemImage from "./ItemImage";
import ItemLikes from "./ItemLikes";
import ItemComments from "./ItemComments";
import ItemTiming from "./ItemTiming";
import ItemInputComment from "./ItemInputComment";

const CardExampleImageCard = () => (
  <Segment>

    <ItemUser />

    <ItemImage />

    <ItemLikes />

    <ItemComments />

    <ItemTiming />

    <Divider />

    <ItemInputComment />
  

  </Segment>
)

export default function HomeContent() {
    return (
      <div>
        <CardExampleImageCard />
        <CardExampleImageCard />
        <CardExampleImageCard />
        <CardExampleImageCard />
      </div>

    )
}