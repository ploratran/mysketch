import { Feed } from "semantic-ui-react"; 
import React from "react"; 

const ItemLikes = () => (
    <Feed>
      <Feed.Meta>
      <Feed.Like style={{ color: "black", fontWeight: "bold" }}>
        8 Likes
      </Feed.Like>
      </Feed.Meta>
    </Feed>
);

export default ItemLikes;