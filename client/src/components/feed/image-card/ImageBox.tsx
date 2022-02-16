import React from "react"; 
import { Segment, Divider } from "semantic-ui-react"; 
import ItemUser from "./ItemUser";
import ItemImage from "./ItemImage";
import ItemLikes from "./ItemLikes";
import ItemComments from "./ItemComments";
import ItemTiming from "./ItemTiming";
import ItemInputComment from "./ItemInputComment";

const ItemCard = () => {
  return (
    <Segment>

      <ItemUser />

      <ItemImage />

      <ItemLikes />

      <ItemComments />

      <ItemTiming />

      <Divider />

      <ItemInputComment />


    </Segment>
  );
}

export default function HomeContent() {
    return (
      <div>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>

    )
}