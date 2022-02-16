import React from "react"; 
import { Feed } from "semantic-ui-react"; 

const ItemUser = () => (

    <Feed>
      <Feed.Event>
        <Feed.Label>
          <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User style={{color:"black"}}>username</Feed.User>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
);

export default ItemUser;