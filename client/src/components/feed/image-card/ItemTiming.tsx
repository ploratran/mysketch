import React from "react"; 
import { Feed } from "semantic-ui-react"; 

const ItemTiming = () => (
    <Feed>
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.Date>3 days ago</Feed.Date>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  
);

export default ItemTiming;