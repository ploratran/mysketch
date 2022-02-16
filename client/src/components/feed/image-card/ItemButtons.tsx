import React from "react"; 
import { Image, Form, Input, Feed, Segment, Divider, Button } from "semantic-ui-react"; 

const ItemLikesComment = () => (
    <div>
        <Button circular  icon='heart outline' size="huge" style={{ backgroundColor: "transparent", margin: "0" }}/>
        <Button circular icon='comment outline' size="huge" style={{ backgroundColor: "transparent" }}/>
    </div>
);

export default ItemLikesComment;